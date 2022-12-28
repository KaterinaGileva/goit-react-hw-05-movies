import { useState } from 'react';
import css from "./SearchBox.module.css";
//const styles = { form: { marginBottom: 20 } };

export const SearchBox = ({ onSubmit }) => {
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
      <form onSubmit={handleSubmit}>
        <button type="submit"
                className={css.button}> Search
        </button>
        <input
            className={css.input}
            value={query}
          onChange={handleChange}
          
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          />
      </form> 
    );
  };
  