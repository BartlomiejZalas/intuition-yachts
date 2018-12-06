import React, { Component } from 'react';
import { translate } from "react-i18next";
import Menu from './components/Menu';
import Content from './components/Content';
import "./App.css";
class App extends Component {

  render() {
    return (
      <div style={{backgroundImage: 'url('+require('./bg.jpg')+')'}}>
        <Menu />
        <Content />
      </div>
    );
  }
}

export default translate()(App);
