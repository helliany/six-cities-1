import React from "react";
import renderer from 'react-test-renderer';
import MainPage from "./main-page.jsx";

const mocks = [
  {
    name: `Beautiful location`,
    type: `Apartment`,
    premium: true,
    price: 120,
    favorite: false,
    rating: 93,
    img: `path`,
    id: `offer-1`,
  },
  {
    name: `Wood and stone place`,
    type: `Private room`,
    premium: false,
    price: 80,
    favorite: true,
    rating: 80,
    img: `path`,
    id: `offer-2`,
  },
];

it(`MainPage correctly renders`, () => {
  const offers = mocks;
  const tree = renderer
    .create(<MainPage
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
