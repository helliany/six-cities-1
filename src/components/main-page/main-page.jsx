import React from "react";
import PropTypes from 'prop-types';

import OfferCardList from '../offer-card-list/offer-card-list.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import Map from '../map/map.jsx';

const propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
  })).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCity: PropTypes.object.isRequired,
  leaflet: PropTypes.object.isRequired,
  mapSettings: PropTypes.object.isRequired,
  onCityChange: PropTypes.func,
};

const defaultProps = {
  onCityChange: () => {},
};

const MainPage = (props) => {
  const {offers, cities, activeCity, leaflet, mapSettings, onCityChange} = props;
  const placesFound = `${offers.length} ${offers.length > 1 ? `places` : `place`} to stay in ${activeCity.name}`;
  const coords = offers.map((offer) => offer.location);

  return <>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="cities tabs">
        <section className="locations container">
          <CitiesList
            cities = {cities}
            activeCityName = {activeCity.name}
            onCityChange = {onCityChange}
          />
        </section>
      </div>
      <div className="cities__places-wrapper">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesFound}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>

            <div className="cities__places-list places__list tabs__content">
              <OfferCardList
                offers={offers}
              />
            </div>

          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                coords={coords}
                location={activeCity.location}
                leaflet={leaflet}
                settings={mapSettings}
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  </>;
};

MainPage.propTypes = propTypes;
MainPage.defaultProps = defaultProps;

export default MainPage;
