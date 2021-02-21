import {
  Switch,
  BrowserRouter, Route, Router, Redirect
} from "react-router-dom";
import history from "./app/config/history";
import Navbar from './app/components/Navbar/Navbar';
import Admin from './app/views/admin';
import { useState } from "react";
import { isAuthenticated, getUser } from './app/config/auth';
import LoginContext from './app/context/LoginContext';
import Portal from './app/views/portal/Portal';
import Login from './app/views/auth/Login';
import Cadastrar from "./app/views/auth/Cadastrar";
function App() {

  return (
    <BrowserRouter >
      <Navbar></Navbar>
      <main>
        <Router history={history}>
          <Switch>
            <Route component={Login} path="/login" />
            <Route component={Cadastrar} path="/cadastrar" />
            <Route component={Portal} path="/portal" />
            <Route component={Admin} path="/" />


          </Switch>
        </Router>
      </main>
    </BrowserRouter>
  );
}

export default App;
