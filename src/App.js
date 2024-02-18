import React from 'react';
import './App.css';
import { Link,Routes, Route} from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';

import {Navbar, Homepage, Cryptocurrencies ,CryptoDetails, News } from './components';

const App = () => {
  return (
    <>
      <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
            <Layout>
              <div className="routes">
                <Routes>
                  <Route path="/" Component={Homepage} />
                  <Route exact path="/cryptocurrencies" Component={Cryptocurrencies} />
                  <Route exact path="/crypto/:coinId" Component={CryptoDetails} />
                  <Route exact path="/news" Component={News} />
                </Routes>
              </div>
            </Layout>
            <div className="footer">
                <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                    Cryptoverse <br />
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/news">News</Link>
                </Space>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;

