import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, NavItem } from "./components/Navigation";
import { Countries } from "./Countries";
import { Home } from "./Home";
import { Country } from "./Countries/Country";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/countries" exact component={Countries} />
          <Route path="/countries/:code" component={Country} />
        </Switch>
      </Router>
    </>
  );
}

function Navigation() {
  return (
    <Nav> 
      <NavItem to="/" title="Home">
        Home
      </NavItem>
      <NavItem to="/countries" title="Countries">
        Countries
      </NavItem>
    </Nav>
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0 auto;
    font-size: 14px;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export { App, Navigation as AppNav };
