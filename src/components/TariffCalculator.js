import React, { useState } from 'react';
import styled from 'styled-components';

const CalculatorContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Result = styled.p`
  margin-top: 20px;
  font-weight: bold;
`;

const TariffCalculator = () => {
  const [consumption, setConsumption] = useState(0);
  const [tariff, setTariff] = useState(0);

  const calculateTariff = () => {
    // Implement your tariff calculation logic here
    const calculatedTariff = consumption * 0.1; // Example calculation
    setTariff(calculatedTariff);
  };

  return (
    <CalculatorContainer>
      <h2>Tariff Calculator</h2>
      <Input
        type="number"
        placeholder="Enter consumption (kWh)"
        value={consumption}
        onChange={(e) => setConsumption(parseFloat(e.target.value))}
      />
      <Button onClick={calculateTariff}>Calculate</Button>
      <Result>Tariff: ${tariff.toFixed(2)}</Result>
    </CalculatorContainer>
  );
};

export default TariffCalculator;