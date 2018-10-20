import React from "react";
import { translate } from "react-i18next";
import RegularPageWrapper from "../../components/RegularPageWrapper"

const Models3D = ({ t }) => {
  return (
    <RegularPageWrapper title={t('pages.models3D.title')}>
      <p>{t('pages.dummy.content')}</p>
    </RegularPageWrapper>
  );
}
export default translate()(Models3D);