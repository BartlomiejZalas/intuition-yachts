import React from "react";
import { translate } from "react-i18next";
import RegularPageWrapper from "../../components/RegularPageWrapper";
import "./Yachts.css";

const Yachts = ({ t }) => {

  const yachts = [{
    title: t('pages.yachts.tram.name'),
    description: t('pages.yachts.tram.description'),
    image: require("./tram-min.png")
  },
  {
    title: t('pages.yachts.eco14.name'),
    description: t('pages.yachts.eco14.description'),
    image: require("./eco-14-min.png")
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
        <div className="col-md-6 portfolio-box-container" key={i}>
          <div className="portfolio-box-image">
            <img src={yachts[i].image} alt={yachts[i].title} className="img-fluid"/>
          </div>
          <div className="hidden">
            <h3>{yachts[i].title}</h3>
            <p>{yachts[i].description}</p>
          </div>
        </div>
      );
      cards.push(card);
    }
    return cards;
  }

  return (
    <RegularPageWrapper title={t('pages.yachts.title')}>
      <div className="row">
        {createCards(yachts)}
      </div>
    </RegularPageWrapper>
  );
}
export default translate()(Yachts);