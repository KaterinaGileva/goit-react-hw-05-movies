
import css from "./SearchBox.module.css";


//const styles = { form: { marginBottom: 20 } };

export const SearchBox = ({ onSearch }) => {

  const handleSubmit = evt =>{
    
      evt.preventDefault();

      if (search.trim() === '') {
        alert('Введите корректное имя');
        return;
      }

      onSearch(evt.currentTarget.elements.query.value);
      evt.currentTarget.reset()
    }

    return (
      <form onSubmit={handleSubmit}>
        <button type="submit"
                className={css.button}> Search
        </button>
        <input
            className={css.input}
            type="text"
            name='query'
          />
      </form> 
    );
  };
  