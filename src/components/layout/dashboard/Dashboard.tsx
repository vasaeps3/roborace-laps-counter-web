import React from 'react';
import { Layout } from 'antd';

import './Dashboard.scss';
import Header from '../../common/header/Header';
import LapsCounter from '../../../containers/laps-counter/LapsCounter';


export interface IHomeProps { }
export interface IHomeState { }

class Dashboard extends React.Component<IHomeProps, IHomeState> {
  public render() {
    return (
      <Layout className="layout">
        <Header />
        <Layout.Content>
          <div className="main-container">
            <LapsCounter />
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>vasaeps3</Layout.Footer>
      </Layout>
    );
  }
}

export default Dashboard;