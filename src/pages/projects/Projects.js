import React from "react";
import { Link } from 'react-router-dom';
import { translate } from "react-i18next";
import RegularPageWrapper from "../../components/RegularPageWrapper";
import Project from './Project';
import "./Projects.css";
import 'react-image-lightbox/style.css';

const Projects = ({ t, match }) => {

  const yachts = ['eco14', 'catb6'].map(key => {
    return {
      id: key,
      title: t('pages.projects.yachts.' + key + '.name'),
      description: t('pages.projects.yachts.' + key + '.description'),
      shortDescription: t('pages.projects.yachts.' + key + '.shortDescription'),
      image: require('./images/' + key + '.jpg')
    }
  });

  let projectsPage = null;
  let pageTitle = null;

  console.log(match);

  if (match.params.project) {
    const project = yachts.filter(p => p.id === match.params.project)[0];

    projectsPage = (<Project project={project} />);
    pageTitle = project.title;
  } else {
    projectsPage = yachts.map(yacht =>
      (
        <div key={yacht.id}>
          <div className="row">
            <div className="col-12 col-sm-4 align-self-center pb-2">
              <Link to={'/projects/' + yacht.id}>
                <img src={yacht.image} alt={yacht.title} className="img-fluid" />
              </Link>
            </div>
            <div className="col-12 col-sm-8 product-description">
              <h3>{yacht.title}</h3>
              <p className="pb-3">{yacht.shortDescription}</p>
              <Link to={'/projects/' + yacht.id} className="btn btn-link more-button" >{t('pages.projects.more')}</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12"> <hr /></div>
          </div>
        </div>
      )
    );
    pageTitle = t('pages.projects.title');
  }
  return (
    <RegularPageWrapper title={pageTitle}>
      <div>{projectsPage}</div>
    </RegularPageWrapper>
  );
}
export default translate()(Projects);