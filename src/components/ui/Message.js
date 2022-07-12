import React from 'react';
import tw, { styled } from 'twin.macro';

const MessageContainer = styled.div(({ danger }) => [
  danger ? tw`border-red-500` : tw`border-green-500`,
  tw`flex flex-col items-center justify-center m-4 p-4 border-2 rounded`
]);

const Message = (props) => {
  const { text, type } = props;

  return (
    <>
      {type === 'error' ? (
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