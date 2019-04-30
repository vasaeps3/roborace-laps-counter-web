import React, { Component } from 'react';


import './App.scss';
import Home from './containers/home/Home';


export interface IAppProps { }
export interface IAppState { }

class App extends Component<IAppProps, IAppState> {
  render() {
    return (
      <Home />
    );
  }
}

export default App;
