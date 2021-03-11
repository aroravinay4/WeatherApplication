import React from 'react';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import WeatherReducer from './src/store/reducers/WeatherReducer';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

const logger = createLogger({ collapsed: true });

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>

  );
};
export default App;
