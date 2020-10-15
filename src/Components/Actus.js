import React from "react";

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
      const articles = await fetch("http://localhost:1337/articles", {
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
      <div className="App">
        <ul>
          {articles.map((article) => (
            <li key={article.id}>{article.Title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Actus;
