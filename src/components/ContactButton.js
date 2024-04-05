import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonContainer = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const ContactButton = () => {
  const handleClick = () => {
    // Implement your contact logic here
    alert('Contact functionality goes here');
  };

  return (
    <ButtonContainer
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
    >
      Contact Us
    </ButtonContainer>
  );
};
export default ContactButton;
