import React from "react";
import { translate } from "react-i18next";
import RegularPageWrapper from "../../components/RegularPageWrapper"

const Contact = ({ t }) => {
  return (
    <RegularPageWrapper title={t('pages.contact.title')}>
      <div>
        <p className="lead">{t('pages.contact.content')}</p>
      </div>
    </RegularPageWrapper>
  );
}
export default translate()(Contact);