import { useState } from "react";

const useFetchData = () => {
  // Loader
  const [loading, setLoading] = useState(false);

  // Mensaje de error
  const [error, setError] = useState("");

  // Data
  const [data, setData] = useState({});

  //   Llamado a la API
  const fetchData = async () => {
    // Activar loader
    setLoading(true);

    try {
      let results = await fetch(
        "https://d2rpzhocglww2h.cloudfront.net/test/test.json"
      );

      results = await results.json();

      //   Desactivar loader
      setLoading(false);

      // Guardar la data
      setData(results);
    } catch (err) {
      //   Desactivar loader
      setLoading(false);

      //   Guardar el error
      setError(err);
    }
  };

  return [loading, error, data, fetchData];
};

export default useFetchData;
