import React from "react";
import { Link } from 'react-router-dom';
import { translate } from "react-i18next";
import RegularPageWrapper from "../../components/RegularPageWrapper";
import Project from './Project';
import "./Projects.css";
import 'react-image-lightbox/style.css';

const Projects = ({ t, match }) => {

  const yachts = [
    {
      id: 'eco14', images: [
        require('./images/eco-14/eco-14e.jpg'),
        require('./images/eco-14/eco-14b.jpg'),
        require('./images/eco-14/eco-14c.jpg'),
        require('./images/eco-14/eco-14d.jpg'),
        require('./images/eco-14/eco-14-top.jpg'),
      ], parentId: null, menu: ['eco14-private', 'eco14-charter', 'eco14-for-disabled', 'eco14-conference']
    },
    {
      id: 'eco14-private', images: [
        require('./images/eco-14-private/3.jpg'),
        require('./images/eco-14-private/2.jpg'),
        require('./images/eco-14-private/4.jpg'),
        require('./images/eco-14-private/5.jpg'),
        require('./images/eco-14-private/1.jpg'),
      ], parentId: 'eco14'
    },
    {
      id: 'eco14-charter', images: [
        require('./images/eco-14-charter/2.jpg'),
        require('./images/eco-14-charter/3.jpg'),
        require('./images/eco-14-charter/4.jpg'),
        require('./images/eco-14-charter/5.jpg'),
        require('./images/eco-14-charter/1.jpg'),
      ], parentId: 'eco14'
    },
    {
      id: 'eco14-for-disabled', images: [
        require('./images/eco-14-for-disabled/4.jpg'),
        require('./images/eco-14-for-disabled/3.jpg'),
        require('./images/eco-14-for-disabled/5.jpg'),
        require('./images/eco-14-for-disabled/2.jpg'),
        require('./images/eco-14-for-disabled/1.jpg'),
      ], parentId: 'eco14'
    },
    {
      id: 'eco14-conference', images: [
        require('./images/eco-14-conference/4.jpg'),
        require('./images/eco-14-conference/5.jpg'),
        require('./images/eco-14-conference/3.jpg'),
        require('./images/eco-14-conference/1.jpg'),
        require('./images/eco-14-conference/2.jpg'),
      ], parentId: 'eco14'
    }
  ].map(y => {
    const projectBreadcrumb = { to: '/projects', title: t('menu.projects') };
    const main = y.parentId === null;
    return {
      id: y.id,
      title: t('pages.projects.yachts.' + y.id + '.name'),
      description: t('pages.projects.yachts.' + y.id + '.description'),
      shortDescription: t('pages.projects.yachts.' + y.id + '.shortDescription'),
      images: y.images,
      main: main,
      breadcrumbs: main ? [projectBreadcrumb] : [projectBreadcrumb, { to: '/projects/' + y.parentId, title: t('pages.projects.yachts.' + y.parentId + '.name') }],
      menuDescription: t('pages.projects.yachts.' + y.id + '.menuDescription'),
      menu: y.menu ? y.menu.map(id => { return { id: id, title: t('pages.projects.yachts.' + y.id + '.menu-' + id) } }) : null
    }
  });

  let projectsPage = null;
  let pageTitle = null;

  if (match.params.project) {
    const project = yachts.filter(p => p.id === match.params.project)[0];

    projectsPage = <Project project={project} />;
    pageTitle = project.title;
  } else {
    projectsPage = yachts.filter(y => y.main).map(yacht =>
      (
        <div key={yacht.id}>
          <div className="row">
            <div className="col-12 col-sm-4 align-self-center pb-2">
              <Link to={'/projects/' + yacht.id}>
                <img src={yacht.images[0]} alt={yacht.title} className="img-fluid" />
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