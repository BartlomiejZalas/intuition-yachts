import React from "react";
import { withNamespaces } from "react-i18next";
import RegularPageWrapper from "../../components/RegularPageWrapper"

const Projects = ({ t }) => {
  return (
    <RegularPageWrapper title={t('pages.projects.title')}>
      <p>{t('pages.dummy.content')}</p>
    </RegularPageWrapper>
  );
}
export default withNamespaces()(Projects);