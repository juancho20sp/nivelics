import React, { useEffect } from "react";
import "./Home.css";
import BeatLoader from "react-spinners/BeatLoader";
import useFetchData from "../../hooks/useFetchData";

import { Main } from "../";

const Home = () => {
  // Hook para la consulta de datos
  const [loading, error, data, fetchData] = useFetchData();

  //   Trigger para la consulta de datos
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading && (
        <div className="Home__loader">
          <BeatLoader></BeatLoader>
        </div>
      )}
      {!loading && !error && <Main data={data.result}></Main>}

      {!loading && error && (
        <div className="Home__loader">
          <p>Un error ocurrió:</p>
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default Home;
