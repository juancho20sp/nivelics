import React from "react";
import "./Navbar.css";
import Routes from "../../routes/routes";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const pushRoute = (route) => {
    history.push(route);
  };

  return (
    <nav>
      <ul>
        <li onClick={() => pushRoute(Routes.home.path)}>Home</li>
        <li onClick={() => pushRoute(Routes.categories.path)}>Categorías</li>
        <li onClick={() => pushRoute(Routes.testimony.path)}>Testimonios</li>
        <li onClick={() => pushRoute(Routes.form.path)}>Formulario</li>
      </ul>
    </nav>
  );
};

export default Navbar;
