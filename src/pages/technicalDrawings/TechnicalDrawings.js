import React from "react";
import { translate } from "react-i18next";
import RegularPageWrapper from "../../components/RegularPageWrapper"

const TechnicalDrawings = ({ t }) => {
  return (
    <RegularPageWrapper title={t('pages.technicalDrawings.title')}>
      <p>{t('pages.dummy.content')}</p>
    </RegularPageWrapper>
  );
}
export default translate()(TechnicalDrawings);