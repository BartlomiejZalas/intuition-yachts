import React, { Component } from 'react';
import { translate } from "react-i18next";
import Menu from './components/Menu';
import Content from './components/Content';
import SocialIcons from './components/SocialIcons/SocialIcons';
import "./App.css";
class App extends Component {

  render() {
    return (
      <div>
        <Menu />
        {/* <SocialIcons /> */}
        <Content />
      </div>
    );
  }
}

export default translate()(App);
