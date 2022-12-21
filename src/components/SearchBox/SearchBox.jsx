import css from "./SearchBox.module.css"

//const styles = { form: { marginBottom: 20 } };

export const SearchBox = ({ value, onChange }) => {
    return (
<header className={css.header}>
      
        <button type="submit"
                className={css.button}>

          search

        </button>
        
         <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
      
      </header>

      
    );
  };
  