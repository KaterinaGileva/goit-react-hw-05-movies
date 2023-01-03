import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 62px 0 0 0;
  background-color: #FFD700;
`;

export const Header = styled.header`
  z-index: 300;
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  
  align-items: center;
  border-bottom: 5px solid blue;
  font-size: 30px;
  font-weight: 600;

  background-color: blue;
  
  > nav {
    display: flex;
    font-weight: 700;
  }
`;

export const Link = styled(NavLink)`
  margin: 6px 10px 6px 20px;
  padding: 8px 5px;
  border-radius: 4px;
  font-size: 34px;
  color: #191970;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &.active {
    color: #FFD700;
  }

  :hover {
    transform: scale(1.03);
    color: #FFD700;
  }
`;