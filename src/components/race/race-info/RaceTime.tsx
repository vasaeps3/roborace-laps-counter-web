import React, { Component, Fragment, PureComponent } from 'react';

import { msToTime } from '../../../utils';
import { IRaceState, RaceStatus } from '../../../store/race/interfaces';
import { ISocketState } from '../../../store/socket/interfaces';


const MsToTime = (props: { time: number }) => (<div>Rice Time: {msToTime(props.time)}</div>)


interface IRaceTimeProps {
  socketStatus: ISocketState['status'];
  raceStatus: IRaceState['status'];
  raceTime: IRaceState['time'];
}

class RaceTime extends PureComponent<IRaceTimeProps>{
  render() {
    let layuot = <MsToTime time={this.props.raceTime} />;
    if (this.props.raceStatus === RaceStatus.RUNNING) {
      layuot = <RaceTimeTick time={this.props.raceTime} />;
    }

    return (
      <div className="race-time">
        {layuot}
      </div>
    );
  }
};

export default RaceTime;


class RaceTimeTick extends Component<any> {
  state = { time: 0, lastSync: 0 };
  private updateInterval = 19;
  private timer!: NodeJS.Timeout;
  private createInterval = () => { this.timer = setInterval(() => { this.tick(); }, this.updateInterval); }
  private clearInterval = () => { this.timer && clearInterval(this.timer); }
  private tick() { this.setState({ time: this.state.time + this.updateInterval, }) };

  componentDidMount() {
    this.createInterval();
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  static getDerivedStateFromProps(props, state) {
    if (state.lastSync !== props.time) {
      return { time: props.time, lastSync: props.time };
    }

    return state;
  }

  render() {
    return (
      <MsToTime time={this.state.time} />
    )
  }
}