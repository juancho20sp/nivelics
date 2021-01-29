import React from "react";
import "./Main.css";

import { Article } from "../";

const Main = (props) => {
  let data = props.data;
  return (
    <>
      {props.data && (
        <div className="Main__container">
          {console.log(props)}
          <h2>{data.title_ppal}</h2>
          <h4>{`${data.test_title} : ${data.test_description}`} </h4>

          <div className="Main__articles">
            {data.articles_pymes_test.map((article) => (
              <Article data={article}></Article>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
