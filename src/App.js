import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import  createStore  from './redux';
import Counter from './container/Counter';

const store= createStore()

function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}

export default App;
