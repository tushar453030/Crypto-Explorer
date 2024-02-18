import React from 'react'
import '../App.css';
import millify from 'millify';

import { Link } from 'react-router-dom';
import { Row, Col, Typography, Statistic } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);
  // console.log(data);
  const globalStats = data?.data?.stats;

  if(isFetching) return <Loader />;

  return (
    <>
        <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
        <Row>
            <Col span={12}> <Statistic title="Total Cryptocurrencies" value={globalStats.total} /> </Col>
            <Col span={12}> <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /> </Col>
            <Col span={12}> <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /> </Col>
            <Col span={12}> <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /> </Col>
            <Col span={12}> <Statistic title="Total Market" value={millify(globalStats.totalMarkets)} /> </Col>
        </Row>
        <div className="home-heading-container">
          <Typography.Title level={2} className="home-title">Top 10 Cryptocurrencies in the World</Typography.Title>
          <Typography.Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Typography.Title>
        </div>
        <Cryptocurrencies simplified/>
        <div className="home-heading-container">
          <Typography.Title level={2} className="home-title">Latest Crypto News</Typography.Title>
          <Typography.Title level={3} className="show-more"><Link to="/news">Show More</Link></Typography.Title>
        </div>
        <News simplified/>
    </>
  )
}

export default Homepage;
