import tw, { styled } from 'twin.macro';

const Button = styled.button(({ danger }) => [
  danger ? tw`bg-red-500 hover:bg-red-700` : tw`bg-blue-600 hover:bg-blue-700`,
  tw`text-white text-base m-2 p-3 border rounded-md`
]);

export default Button;