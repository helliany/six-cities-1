import React from "react";
import ReactDOM from "react-dom";
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import leaflet from 'leaflet';

import {Operation} from "./reducer/data/data";
import reducer from "./reducer/reducer";
import createAPI from './api';
import App from "./components/app/app.jsx";
import {mapSettings} from './constants';

mapSettings.icon = leaflet.icon({
  iconUrl: `img/map-pin.svg`,
  iconSize: [30, 30]
});

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  store.dispatch(Operation.loadData());

  ReactDOM.render(<Provider store={store}>
    <App
      leaflet = {leaflet}
      mapSettings = {mapSettings}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
