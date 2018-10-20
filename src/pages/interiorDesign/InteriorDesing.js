import React from "react";
import { translate } from "react-i18next";
import RegularPageWrapper from "../../components/RegularPageWrapper"

const InteriorDesing = ({ t }) => {
  return (
    <RegularPageWrapper title={t('pages.interiorDesgin.title')}>
      <p>{t('pages.dummy.content')}</p>
    </RegularPageWrapper>
  );
}
export default translate()(InteriorDesing);