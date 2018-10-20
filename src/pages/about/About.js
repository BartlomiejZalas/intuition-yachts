import React from "react";
import { translate } from "react-i18next";
import RegularPageWrapper from "../../components/RegularPageWrapper"

const About = ({ t }) => {
  return (
    <RegularPageWrapper title={t('pages.about.title')}>
      <p>{t('pages.dummy.content')}</p>
    </RegularPageWrapper>
  );
}
export default translate()(About);