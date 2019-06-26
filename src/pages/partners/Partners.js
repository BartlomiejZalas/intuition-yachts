import React from "react";
import { translate } from "react-i18next";
import RegularPageWrapper from "../../components/RegularPageWrapper";

const Partners = ({ t }) => {

  return (
    <RegularPageWrapper title={t('pages.partners.title')}>
      <div dangerouslySetInnerHTML={{__html: t('pages.partners.content', {partner1Logo: require('./partner1-logo.png')})}} />
      <hr></hr>
      <div dangerouslySetInnerHTML={{__html: t('pages.partners.seacon', {logo: require('./seacon.png')})}} />
      <hr></hr>
    </RegularPageWrapper>
  );
}
export default translate()(Partners);