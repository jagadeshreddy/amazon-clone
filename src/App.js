import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path="/checkout">
        <Header/>
          <h1>CheckOut</h1>
        </Route>
        <Route path="/login">
          <h1>loginPAge</h1>
        </Route>
        <Route path="/">
          <Header/>
        <Home></Home>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
