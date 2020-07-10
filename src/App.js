import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import User from './components/User';


function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn-group mt-5">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/contacto" className="btn btn-dark">
            Contacto
          </Link>
          <NavLink to="/nosotros" className="btn btn-dark" activeClassName="active">
            Nosotros
          </NavLink>
        </div>
        <hr />

        <Switch>
          <Route path="/nosotros/:id">
            <User />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
