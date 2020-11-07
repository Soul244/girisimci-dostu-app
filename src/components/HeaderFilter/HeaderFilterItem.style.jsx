import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.a`
  width: 100%;
  padding: 8px 0;
  background-color: ${(props) => (props.isActive ? lighten(0.25, 'gray') : lighten(0.40, 'gray'))};
  color: ${(props) => (props.isActive ? 'white' : 'black')};
  transition: color 0.15s linear, background-color 0.15s linear;
  text-align: center;
  text-decoration: none;
  font-size: 0.875rem;
  cursor: pointer;
  :hover {
    background-color: ${lighten(0.25, 'gray')};
    color: white;
    text-decoration: none;
  }
  :first-child {
    border-radius: 16px 0 0 16px;
  }
  :last-child {
    border-radius: 0 16px 16px 0;
  }
`;
