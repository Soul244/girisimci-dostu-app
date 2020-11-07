import { lighten } from 'polished';
import styled from 'styled-components';
import LazyImage from '../LazyImage';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 16px;
  border: 1px solid ${lighten(0.45, 'gray')};
  cursor: pointer;
  transition: box-shadow 0.3s linear;
  :hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const ImageContainer = styled.div`
  padding: 0.5rem 0.5rem 0 0.5rem;
`;

export const Image = styled(LazyImage)`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 16px;
`;

export const ContainerInner = styled.div`
  padding: 1rem;
`;

export const Name = styled.p`
  margin-bottom: 0.5rem;
`;

export const Sales = styled.h6`
  font-size: 0.75rem;
  color: ${lighten(0.55, 'black')};
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const ReviewCount = styled.div`
  margin: 4px 0 0 4px;
  font-size: 0.875rem;
  color: ${lighten(0.5, 'black')};
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const OldPrice = styled.h6`
  margin-right: 0.5rem;
  opacity: 0.7;
  font-size: 0.875rem;
  text-decoration: line-through;
`;

export const Price = styled.h5`
  font-size: 1.2rem;
  color: orange;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0.375rem 0.875rem;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 16px;
  transition: background-color 0.3s;
  :hover {
    background-color: ${lighten(0.15, 'orange')};
  }
  :focus {
    outline: none;
  }
`;
