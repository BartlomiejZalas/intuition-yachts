import React from "react";
import { translate } from "react-i18next";

const Contact = ({ t }) => {
  return (
    <div>
      <h2>{t('pages.contact.title')}</h2>
      <p>{t('pages.contact.content')}</p>
    </div>
  );
}
export default translate()(Contact);