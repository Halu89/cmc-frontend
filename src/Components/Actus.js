import React from "react";
import marked from "marked";

// INSERTS target="_blank" INTO HREF TAGS
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
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
      // article : {
      //   id,
      //   Title,
      //   Article,
      // }
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
      return (
        <div className="error">
          An error occured{" "}
          {process.env.REACT_APP_ENVIRONMENT === "dev"
            ? " : " + error.message
            : " :"}
        </div>
      );
    }

    return (
      <main className="actus">
        {this.state.articles.length === 0 && (
          <div className="loading">
            <p className="loading__text">Chargement</p>
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
        {articles.map((article) => {
          return (
            <BlogArticle
              id={article.id}
              title={article.Title}
              body={article.Article}
              publishedAt={article.published_at}
              author={article.author}
              key={article.id}
            />
          );
        })}
      </main>
    );
  }
}

const BlogArticle = ({ id, title, body, publishedAt, author }) => {
  const date = new Date(publishedAt).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="article__card" key={id}>
      <h2 className="article__title">{title}</h2>
      <div className="article__date">
        Publié le {date} {author ? `par ${author.username}` : ""}
      </div>
      <hr />
      <div
        className="article__text"
        dangerouslySetInnerHTML={{ __html: marked(body) }}
      ></div>
    </div>
  );
};
export default Actus;
