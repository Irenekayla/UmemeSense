import React from 'react';
import styled from 'styled-components';
import GaugeChartComponent from '../components/GaugeChartComponent';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const GaugeChartsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  margin-top: 40px;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <h1>Electric Meter Dashboard</h1>
      <GaugeChartsContainer>
        <GaugeChartComponent value={50} label="Frequency" color="green" />
        <GaugeChartComponent value={75} label="Current" color="blue" />
        <GaugeChartComponent value={30} label="Voltage" color="orange" />
      </GaugeChartsContainer>
    </HomeContainer>
  );
};

export default HomePage;


