import styled from 'styled-components';

export const CastUl = styled.ul`
  padding: 20px 0 0 0;
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 16px;
  
  list-style: none;
`;

export const CastLi = styled.li`
  border: 5px solid blue;
  border-radius: 8px;
  background-color:white;
  box-shadow: 0px 4px 3px 0px rgba(246, 0, 0, 0.6),
    4px 4px 4px 0px rgba(246, 247, 245, 0.4), 0px 2px 1px -1px rgba(246, 247, 245, 0.4);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
      transform: scale(1.02);
      }
`;
export const CastImg = styled.img`
  display: block;
  width: 100%;
  height: 260px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 8px;
  background-color: white;
`;

export const CastText = styled.p`
  padding: 0 15px;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 700;
  color: #0B0B61;
  
`;