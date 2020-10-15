import React from "react";
import marked from "marked";

marked.setOptions({ breaks: true, baseUrl: process.env.REACT_APP_API_URI });
class Actus extends React.Component {
  constructor(props) {
    super(props);
    // State of your application
    this.state = {
      articles: [],
      error: null,
    };
  }

  // Fetch your restaurants immediately after the component is mounted
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
      const articles = await fetch(process.env.REACT_APP_API_URI + "articles", {
        method: "GET",
        headers: headers,
      })
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
              <hr/>
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
