import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Flash from "./components/Flash";
import Navbar from "./components/Navbar";
import { Container, } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import './App.css';

const App = () => (
  <>
    <Navbar />
    <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/flashcards" component={Flash} />
          <Route component={NoMatch} />
        </Switch>
    </Container>
    
  </>
);

export default App;

