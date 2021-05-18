import React from "react";
import marked from "marked";

// Process the markdown to html
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

export default BlogArticle;
