import React from "react";
import marked from "marked";

// INSERTS target="_blank" INTO HREF TAGS
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + "</a>";
};
marked.setOptions({
  breaks: true, // Insert line breaks on single line break
  baseUrl: process.env.REACT_APP_API_URI, // Prefix the relative url
  renderer,
});

class Actus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      error: null,
    };
  }

  componentDidMount = async () => {
    // Parses the JSON returned by a network request
    const parseJSON = (resp) => (resp.json ? resp.json() : resp);

    // Checks if a network request came back fine, and throws an error if not
    const checkStatus = (resp) => {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return parseJSON(resp).then((resp) => {
        throw resp;
      });
    };
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const articles = await fetch(
        process.env.REACT_APP_API_URI + "articles?_sort=published_at:DESC",
        {
          method: "GET",
          headers: headers,
        }
      )
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ articles });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, articles } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <main className="actus">
        {articles.map((article) => {
          const publishedAt = new Date(article.published_at);
          const date = publishedAt.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          });
          return (
            <div className="article-card" key={article.id}>
              <h2 className="article-title">{article.Title}</h2>
              <div className="date">Publié le {date}</div>
              <hr />
              <div
                className="article-text"
                dangerouslySetInnerHTML={{ __html: marked(article.Article) }}
              ></div>
            </div>
          );
        })}
      </main>
    );
  }
}

export default Actus;
