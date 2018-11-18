import React from "react";
import { Route } from "react-router-dom";
import { translate } from "react-i18next";

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Projects from '../pages/Projects/Projects';
import Partners from '../pages/partners/Partners';
import Contact from '../pages/contact/Contact';
import Services from '../pages/Services/Services';

const Content = ({ t }) => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/:project" component={Projects} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/partners" component={Partners} />
            <Route exact path="/contact" component={Contact} />
        </div>
    )
}

export default translate()(Content);