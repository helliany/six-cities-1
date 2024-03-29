import React from "react";
import renderer from 'react-test-renderer';
import {MemoryRouter as Router} from 'react-router-dom';

import OfferCard from "./offer-card.jsx";
import {offers} from "../../mocks/test-mocks";

it(`OfferCard correctly renders`, () => {
  const offer = offers[0];
  const tree = renderer
    .create(<Router>
      <OfferCard
        offer={offer}
      />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
