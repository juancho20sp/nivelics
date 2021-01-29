import React from "react";
import "./NotFound.css";

import Routes from "../../routes/routes";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const backToHome = () => {
    history.push(Routes.home.path);
  };

  return (
    <div className="NotFound__container">
      <p>
        ¡Ups! <br /> No encontramos lo que buscas
      </p>

      <p className="return" onClick={() => backToHome()}>
        Volver a inicio
      </p>
    </div>
  );
};

export default NotFound;
