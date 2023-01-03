import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin: 10px 50px;
  padding: 8px 8px;
  color: blue;
  border: 3px solid blue;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  
  :hover {
    color:black ;
  }
`;

export default function BackLink ({ to, children }) {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
      </StyledLink>
  );
};