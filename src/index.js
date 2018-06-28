import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import App from './components/App';
import allReducers from './reducers';
import { Provider } from 'react-redux';



const store = createStore (allReducers,
                    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

                  );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
