import React from "react";
import renderer from 'react-test-renderer';

import MainPage from "./main-page.jsx";
import testMocks from "../../mocks/test-mocks";

it(`MainPage correctly renders`, () => {
  const offers = testMocks;
  const tree = renderer
    .create(<MainPage
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});