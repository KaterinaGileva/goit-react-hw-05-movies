import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 70px 0;
  background-color: #FFD700;

`;

export const Header = styled.header`

  z-index: 300;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: blue;
  padding: 15px 15px;
  border-bottom: 5px solid blue;
  font-size: 30px;
  font-weight: 600;
  
  > nav {
    display: flex;
    gap: 35px;
    font-weight: 700;
    
  }
`;

export const Link = styled(NavLink)`
  margin: 5px 40px 5px 0;
  padding: 8px 8px;
 
  border-radius: 4px;
  text-decoration: none;
  color: blue;
  font-size: 24px;
 
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &.active {
    color: blue
    background-color:blue;
  }
  :hover {
    transform: scale(1.03);
    background-color:blue;
  }
`;