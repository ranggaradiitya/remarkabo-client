import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0 1rem;
  border: 2px solid ${(props) => (props.danger ? '#F56565' : '#68d391')};
  border-radius: 5px;
`;

const Message = (props) => {
  const { text, type } = props;

  return (
    <>
      {(type === 'error') ? (
        <MessageContainer danger>
          <p><span role="img" aria-label="error">❌</span> {text}</p>
        </MessageContainer>
      ) : (
        <MessageContainer>
          <p><span role="img" aria-label="success">✅</span> {text}</p>
        </MessageContainer>
      )}
    </>
  )
};

export default Message;