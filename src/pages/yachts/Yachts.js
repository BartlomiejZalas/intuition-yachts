import React from "react";
import { translate } from "react-i18next";
import RegularPageWrapper from "../../components/RegularPageWrapper"

const Yachts = ({ t }) => {
  return (
    <RegularPageWrapper title={t('pages.yachts.title')}>
      <p>{t('pages.dummy.content')}</p>
    </RegularPageWrapper>
  );
}
export default translate()(Yachts);