import React, { useEffect } from "react";
import "./Testimony.css";
import BeatLoader from "react-spinners/BeatLoader";
import useFetchData from "../../hooks/useFetchData";

import { Article } from "../";

const Testimony = () => {
  // Hook para la consulta de datos
  const [loading, error, data, fetchData] = useFetchData();

  //   Trigger para la consulta de datos
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading && (
        <div className="Testimony__loader">
          <BeatLoader></BeatLoader>
        </div>
      )}
      {!loading && !error && data && (
        <div className="Testimony__container">
          <h3>Testimonios</h3>
          {data.result && console.log(data.result.testimony)}
          {data.result && <Article data={data.result.testimony[0]}></Article>}
        </div>
      )}

      {!loading && error && (
        <div className="Testimony__loader">
          <p>Un error ocurrió:</p>
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default Testimony;
