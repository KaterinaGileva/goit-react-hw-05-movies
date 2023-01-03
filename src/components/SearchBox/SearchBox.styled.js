import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  margin: 18px 0 9px 15px;

  width: 100%;
  max-width: 600px;

  background-color: transperent;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 44px;
  height: 44px;
  margin: 6px 0 0 20px;
  padding: 1px;

  border: 4px solid blue;
  border-radius: 5px;
  
  :hover {
    background-color: #FFD700;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  margin: 6px 5px;
  padding: 4px 4px;
  width: 100%;
  
  font: inherit;
  font-size: 24px;

  border: solid 4px blue;
  border-radius: 4px;
  outline: none;
  
  ::placeholder {
    font: inherit;
    font-size: 24px;
  }
`;