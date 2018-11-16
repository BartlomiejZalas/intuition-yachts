import React from "react";
import { translate } from "react-i18next";
import RegularPageWrapper from "../../components/RegularPageWrapper";

import aboutImage from "./about.jpg";

const About = ({ t }) => {
  return (
    <RegularPageWrapper title={t('pages.about.title')}>
      <div className="row">
        <div className="col-sm-4 text-center py-2">
          <img src={aboutImage} alt="about" className="img-fluid" />
        </div>
        <div className="col-sm-8">
          <div dangerouslySetInnerHTML={{__html: t('pages.about.content')}} />
        </div>
      </div>

    </RegularPageWrapper>
  );
}
export default translate()(About);