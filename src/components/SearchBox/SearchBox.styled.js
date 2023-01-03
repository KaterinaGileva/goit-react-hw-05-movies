import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: transperent;
  margin: 15px 0 12px 15px;
  border: 3px solid blue;
  border-radius: 5px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 46px;
  height: 46px;
  border: 3px solid blue;
  margin: 2px;
  border-radius: 6px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 3px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #FFD700;
  :hover {
    opacity: 1;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 24px;
  border: solid 4px blue;
  border-radius: 4px;
  outline: none;
  margin: 5px 5px;
  padding: 4px 4px;
  ::placeholder {
    font: inherit;
    font-size: 24px;
  }
`;