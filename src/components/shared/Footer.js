import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 1rem;
  padding: 0.5rem;
  min-height: 10vh;
`;


const Footer = () => {
  return (
    <Container>
      <p>
        Build with <span role="img" aria-label="love">🖤</span> by <a href="https://www.linkedin.com/in/ranggaradiitya/">Rangga Raditya</a> &copy; 2022
      </p>
    </Container>
  );
};

export default Footer;