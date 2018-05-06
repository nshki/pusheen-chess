import React, { Component } from 'react';
import { Provider } from 'redux-zero/react';
import store from './store';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Board />
      </Provider>
    );
  }
}

export default App;
