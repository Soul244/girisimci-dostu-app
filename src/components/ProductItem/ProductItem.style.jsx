import { lighten } from 'polished';
import styled from 'styled-components';
import LazyImage from '../LazyImage';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 0 0 8px 8px;
  border: 1px solid ${lighten(0.45, 'gray')};
  cursor: pointer;
  transition: box-shadow 0.3s linear;
  :hover {
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  }
`;

export const ContainerInner = styled.div`
  padding: 0.5rem;
`;

export const Image = styled(LazyImage)`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 8px 8px 0 0;
  margin-bottom: 1rem;
`;

export const FlexRow = styled.div`
  display:flex;
  align-items: center;
`;

export const Name = styled.p`
  margin: 0 0 0.5rem 0;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ReviewCount = styled.div`
  margin: 8px 0 0 8px;
  font-size: 0.875rem;
  color: ${lighten(0.5, 'black')};
`;

export const OldPrice = styled.h6`
margin-right: 0.5rem;
opacity: 0.7;
  font-size: 0.875rem;
  text-decoration: line-through;
`;

export const Price = styled.h5`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: orange;
`;

export const Sales = styled.h6`
  font-size: 0.875rem;
  color: ${lighten(0.45, 'black')};
`;
