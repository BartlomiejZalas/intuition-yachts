import React from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";

const About = ({ t, match }) => {
  return (
    <div>
      <h2>{t('pages.about.title')}</h2>
      <p>{t('pages.about.content')}</p>
      <p>
        <Link className="nav-link" to="/about/project1">Project 1</Link>
        <Link className="nav-link" to="/about/project2">Project 2</Link>
      </p>
      {match.params.projectId !== undefined &&
        <div>
          <strong>{t('pages.about.selected')}: {match.params.projectId}</strong>
        </div>
      }
    </div>
  );
}
export default translate()(About);