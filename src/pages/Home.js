import React from "react";
import { translate } from "react-i18next";

const Home = ({ t }) => {
  return (
    <div>
      <h2>{t('pages.home.title')}</h2>
      <p>{t('pages.home.content')}</p>
    </div>
  );
}
export default translate()(Home);