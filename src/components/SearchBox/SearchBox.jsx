import { useState } from 'react';
import { SearchButton, SearchForm, SearchInput } from './SearchBox.styled';
import { BiSearch } from 'react-icons/bi';

export default function Search({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt =>{
    
      evt.preventDefault();

      if (query.trim() === '') {
        alert('Введите корректное имя');
        return;
      }

      onSubmit(query);
    setQuery('');
    }

    return (
      <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <BiSearch
            style={{
              width: 40,
              height: 40,
              
            }}
          />
        </SearchButton>

        <SearchInput
          value={query}
          onChange={handleChange}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </SearchForm>
    </>
    );
  };
  