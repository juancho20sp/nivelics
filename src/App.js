import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Layout,
  Home,
  Form,
  NotFound,
  Testimony,
  Categories
} from "./components";
import Routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            {/* Vista principal */}
            <Route exact path={Routes.home.path} component={Home}></Route>

            {/* Vista testimonios */}
            <Route
              exact
              path={Routes.testimony.path}
              component={Testimony}
            ></Route>

            {/* Vista categorías */}
            <Route
              exact
              path={Routes.categories.path}
              component={Categories}
            ></Route>

            {/* Vista del formulario */}
            <Route exact path={Routes.form.path} component={Form}></Route>

            {/* 404 */}
            <Route component={NotFound}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
