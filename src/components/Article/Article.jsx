import React from "react";
import "./Article.css";

const Article = (props) => {
  let data = props.data;

  const goToLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      className="Article__container"
      onClick={() => goToLink(data.url_article)}
    >
      {/* {console.log(props)} */}
      <h4>{data.name}</h4>
      <img src={data.image} alt={data.name} />
      <p>{data.description || data.text}</p>
    </div>
  );
};

export default Article;
