import React from 'react';
import { Layout } from 'antd';

import Header from '../../components/header/Header';
import WsContainer from '../../components/ws/WsContainer';


export interface IHomeProps { }

export interface IHomeState { }

class Home extends React.Component<IHomeProps, IHomeState> {

  public render() {
    return (
      <Layout className="layout">
        <Header />
        <Layout.Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {/* <WsContainer /> */}
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