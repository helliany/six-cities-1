import React from "react";
import renderer from 'react-test-renderer';

import OfferCardList from "./offer-card-list.jsx";
import {offers} from "../../mocks/test-mocks";

it(`OfferCardList  correctly renders`, () => {
  const tree = renderer
    .create(<OfferCardList
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
