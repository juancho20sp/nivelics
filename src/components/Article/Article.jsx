import React from "react";
import "./Article.css";

const Article = (props) => {
  let data = props.data;
  return (
    <div className="Article__container">
      <h4>{data.name}</h4>
      <img src={data.image} alt={data.name} />
      {console.log(props)}
      <p>{data.description}</p>
    </div>
  );
};

export default Article;
