import React, { useEffect } from "react";
import "./Categories.css";
import BeatLoader from "react-spinners/BeatLoader";
import useFetchData from "../../hooks/useFetchData";

import { Article } from "../";

const Categories = () => {
  // Hook para la consulta de datos
  const [loading, error, data, fetchData] = useFetchData();

  //   Trigger para la consulta de datos
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading && (
        <div className="Categories__loader">
          <BeatLoader></BeatLoader>
        </div>
      )}
      {!loading && !error && data && (
        <div className="Categories__container">
          {/* {console.log(data.result.categories)} */}
          {data.result &&
            data.result.categories.map((cat) => (
              <>
                <p>{cat.name} </p>

                <div className="Category__services">
                  {cat.services.map((article) => (
                    <Article data={article}></Article>
                  ))}
                </div>
              </>
            ))}
        </div>
      )}

      {!loading && error && (
        <div className="Categories__loader">
          <p>Un error ocurrió:</p>
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default Categories;
