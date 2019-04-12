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

// [    UI] Message received = [{"type":"STATE","state":"READY"}]
// [ROBOT1] Opening websocket userSession = [org.apache.tomcat.websocket.WsSession@16d41725]
// [ROBOT1] Message received = [{"type":"STATE","state":"READY"}]
// [ROBOT1] Send message = [{"type":"ROBOT_INIT","serial":100}]
// [    UI] Message received = [{"type":"LAP","serial":100,"num":1,"laps":0,"time":0,"place":1}]
// [ROBOT1] Message received = [{"type":"LAP","serial":100,"num":1,"laps":0,"time":0,"place":1}]
// [ROBOT2] Opening websocket userSession = [org.apache.tomcat.websocket.WsSession@721bf7ad]
// [ROBOT2] Message received = [{"type":"STATE","state":"READY"}]
// [ROBOT2] Send message = [{"type":"ROBOT_INIT","serial":101}]
// [    UI] Message received = [{"type":"LAP","serial":101,"num":2,"laps":0,"time":0,"place":2}]
// [ROBOT2] Message received = [{"type":"LAP","serial":101,"num":2,"laps":0,"time":0,"place":2}]
// [ROBOT1] Message received = [{"type":"LAP","serial":101,"num":2,"laps":0,"time":0,"place":2}]
// [    UI] Send message = [{"type":"LAPS"}]
// [    UI] Message received = [{"type":"LAP","serial":100,"num":1,"laps":0,"time":0,"place":1}]
// [    UI] Message received = [{"type":"LAP","serial":101,"num":2,"laps":0,"time":0,"place":2}]
export default App;
