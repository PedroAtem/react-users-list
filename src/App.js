import React, { Component } from 'react';
import './App.css';

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import rootSaga from './sagas';

// components
import UsersList from './pages/UsersList';
import Loading from './components/Loading';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="content">
            <Loading />
            <UsersList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
