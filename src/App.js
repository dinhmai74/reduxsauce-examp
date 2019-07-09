import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import  createStore  from './redux';
import RootContainer from './container/RootContainer';

const store= createStore()

function App() {
  return (
    <Provider store={store}>
      <RootContainer/>
    </Provider>
  );
}

export default App;
