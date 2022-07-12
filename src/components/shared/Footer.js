import React from 'react';
import tw from 'twin.macro';

const Container = tw.div`m-4 p-2`;

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