import React from 'react';
import { Layout } from 'antd';

import './Home.scss';
import Header from '../../components/header/Header';
import LapsCounter from '../../components/laps-counter/LapsCounter';


export interface IHomeProps { }
export interface IHomeState { }

class Home extends React.Component<IHomeProps, IHomeState> {
  public render() {
    return (
      <Layout className="layout">
        <Header />
        <Layout.Content>
          <div className="main-container">
            <LapsCounter />
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED23
      </Layout.Footer>
      </Layout>
    );
  }
}

export default Home;