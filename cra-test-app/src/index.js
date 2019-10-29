import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

import App from './App';

import { AppContext } from './state/context';
import initialState from './state/initialState';
import reducer from './state/reducer';

const ConnectedApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <App />
    </AppContext.Provider>
  );
};
ReactDOM.render(<ConnectedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
