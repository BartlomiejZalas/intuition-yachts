import React from "react";
import { translate } from "react-i18next";
import RegularPageWrapper from "../../components/RegularPageWrapper";
import "./Projects.css";
import 'react-image-lightbox/style.css';

const Yachts = ({ t }) => {

  const yachts = [{
    title: t('pages.yachts.tram.name'),
    description: t('pages.yachts.tram.description'),
    image: require("./tram-min.png")
  },
  {
    title: t('pages.yachts.yacht.name'),
    description: t('pages.yachts.yacht.description'),
    image: require("./yacht.jpg")
  },
  {
    title: t('pages.yachts.eco14.name'),
    description: t('pages.yachts.eco14.description'),
    image: require("./eco-14-min.png")
  }
  ];

  const createCards = (yachts) => {
    const cards = [];
    for (let i = 0; i < yachts.length; i++) {
      const card = (
        <div className="col-md-6 my-3" key={i}>
          <div className="portfolio-container">
            <img src={yachts[i].image} alt={yachts[i].title} className="img-fluid" />
            <div className="overlay">
              <div className="text">
                <h3>{yachts[i].title}</h3>
                {yachts[i].description ? <p className="d-none d-sm-block d-md-none d-lg-block">{yachts[i].description}</p> : ""}
              </div>
            </div>
          </div>
        </div>
      );
      cards.push(card);
    }
    return cards;
  }

  return (
    <RegularPageWrapper title={t('pages.projects.title')}>
      <div className="row">
        {createCards(yachts)}
      </div>
    </RegularPageWrapper>
  );
}
export default translate()(Yachts);