import React, { Component } from 'react';
import { translate } from "react-i18next";
import LanguageMenu from './components/LanguageMenu';
import Menu from './components/Menu';
import Content from './components/Content';

class App extends Component {

  render() {
    const { t } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>{t("page.title")}</h1>
              <LanguageMenu />
            <hr></hr>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <Menu />
          </div>
          <div className="col-sm-9">
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default translate()(App);
