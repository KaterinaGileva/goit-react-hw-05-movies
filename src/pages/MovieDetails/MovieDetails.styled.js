import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DetailMain = styled.div`
// margin: 0 50px;
//   padding: 0 50px;
`;

export const MovieAbout = styled.div`
  display: flex;
  padding: 0 50px 0 50px;
  border-bottom: 5px solid blue;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 50px;
`;

export const DetailImg = styled.img`
  display: inline-block;
  max-width: 30wv;
  max-height: 50hv;
  object-fit: cover;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgbargba(20, 53, 219, 0.9);
  margin: 0 0 10px 0;
`;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  margin-bottom: 20px;
  font-size: 24px;   
  font-weight: 600;
  border-bottom: 5px solid blue;
  
`;

export const Title2 = styled.h2`
  color: #08298A;
  padding: 10px
`
export const Title3 = styled.h3`
  color: #08298A;
  padding: 10px
`
export const DetailText = styled.p`
  text-decoration: none;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  color: black;
  padding: 10px
 
`;

export const MovieLink = styled(NavLink)`
cursor: pointer;
font-family: inherit;
font-size: 24px;

font-style: normal;
font-weight: 700;

color: black;
padding: 5px
border: 2px solid blue;
border-radius: 5px;

:hover {
  color: #08298A;
}
`;