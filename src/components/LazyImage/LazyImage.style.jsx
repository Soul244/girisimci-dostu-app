import styled from 'styled-components';

export const Image = styled.img`
  transition: opacity 400ms ease 0ms;
`;

export const ThumbImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: visibility 0ms ease 400ms;
`;
