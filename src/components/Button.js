import styled from 'styled-components';
import theme from '../theme';

export default styled.button`
  color: white;
  background-color: ${theme.midBright};
  padding: 0.6rem 1.3rem;
  font-size: 1rem;
  font-weight: 1000;
  text-transform: uppercase;
  border-radius: 0.5rem;
  border: 2px solid ${theme.midBright};
  box-shadow: ${(props) =>
    props.withShadow ? '0px 3px 6px rgba(0,0,0,0.16)' : 'none'};
  &:focus {
    outline: none;
    border-color: white;
  }
  cursor: pointer;
`;
