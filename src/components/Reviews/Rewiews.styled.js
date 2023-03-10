import styled from 'styled-components';

export const ReviewsUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  margin-bottom: 20px;
  padding: 20px 0 0 0;
  list-style: none;
`;
export const ReviewsLi = styled.li`
  margin-bottom: 20px;
  padding: 5px;
  border: 4px solid blue;
  border-radius: 8px;
  box-shadow: 0px 4px 3px 0px rgba(246, 0, 0, 0.2),
    4px 4px 4px 0px rgba(246, 247, 245, 0.14),
    0px 2px 1px -1px rgba(246, 247, 245, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color:white;
`;
export const ReviewsImg = styled.img`
  display: block;
  margin: 5px 15px;
  height: 50%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 8px;
`;

export const ReviewsText = styled.p`
  padding: 0 15px;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  color: #0B0B61;
  
`;

export const Title3 = styled.h3`
  color: blue;
  padding: 5px 15px;
`;