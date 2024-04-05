import React from 'react';
import GaugeChart from 'react-gauge-chart';

const GaugeChartComponent = ({ value, label, color }) => {
  return (
    <div>
      <GaugeChart
        id={label}
        nrOfLevels={20}
        percent={value / 100}
        textColor={color}
        formatTextValue={(value) => value.toFixed(2)}
      />
      <h3 style={{ color }}>{label}</h3>
    </div>
  );
};

export default GaugeChartComponent;