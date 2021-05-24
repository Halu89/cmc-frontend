import React from "react";

import Loading from "./Loading";
import Error from "./Error";
import BlogArticle from "./BlogArticle";

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
      //   Title,  <--- watch the capitalization
      //   Article,
      //   author : {
      //      username,
      //      ...
      //   }
      // }
      const articles = await fetch(
        process.env.REACT_APP_ARTICLES_API_URI + "articles?_sort=published_at:DESC",
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

    // Print errors if couldn't fetch articles
    if (error) {
      return (
        <main className="actus">
          <Error error={error} />
        </main>
      );
    }

    return (
      <main className="actus">
        {this.state.articles.length === 0 && <Loading />}
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

export default Actus;
