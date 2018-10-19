import React from "react";
import { Route } from "react-router-dom";
import { translate } from "react-i18next";
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';

const Content = ({ t }) => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path={"/about/:projectId"} component={About} />
        </div>
    )
}

export default translate()(Content);