import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieList = styled.div`
     display: grid;
     grid-template-columns: 1fr;
     grid-gap: 16px;
`;

export const MovieUl = styled.ul`
     display: grid;
     max-width: calc(100vw - 48px);
     grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
     grid-gap: 16px;
     padding: 0 50px 0 50px;
     list-style: none;
`
export const MovieLi = styled.li`
     border: 8px solid blue;
     border-radius: 8px;
     box-shadow: 0px 4px 3px 0px rgba(20, 53, 219, 1),
     4px 4px 4px 0px rgba(20, 53, 219, 1), 0px 2px 1px -1px rgba(20, 53, 219, 1);
     transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
     
     :hover {
          transform: scale(1.03);
     }
`
export const MovieImg = styled.img`
     display: block;
     padding: 5px;
     width: 100%;
     height: 360px;
     object-fit: cover;
     overflow: hidden;
     border-radius: 8px;
`

export const MovieText = styled.p`
     text-decoration: none;
     cursor: pointer;
     font-family: inherit;
     font-size: 24px;
     font-style: normal;
     font-weight: 500;
     color: blue;
     padding: 5px 15px;
   `;

export const Title1 = styled.h1`
     color: blue;
     padding: 10px 5px 10px 50px;
    `
export const MovieLink = styled(NavLink)`
     text-decoration: none;
     color: black;
     
:active {
  color: blue;
}
`;