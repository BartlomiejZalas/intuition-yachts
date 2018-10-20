import React from "react";
import { Route } from "react-router-dom";
import { translate } from "react-i18next";

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Projects from '../pages/projects/Projects';
import Yachts from '../pages/yachts/Yachts';
import InteriorDesign from '../pages/interiorDesign/InteriorDesing';
import Models3D from '../pages/models3D/Models3D';
import TechnicalDrawings from '../pages/technicalDrawings/TechnicalDrawings';
import Partners from '../pages/partners/Partners';
import Contact from '../pages/contact/Contact';

const Content = ({ t }) => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/services/yachts" component={Yachts} />
            <Route exact path="/services/interior-design" component={InteriorDesign} />
            <Route exact path="/services/models-3d" component={Models3D} />
            <Route exact path="/services/technical-drawings" component={TechnicalDrawings} />
            <Route exact path="/partners" component={Partners} />
            <Route exact path="/contact" component={Contact} />
        </div>
    )
}

export default translate()(Content);