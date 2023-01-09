import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export function Searchbar({ onSubmit }) {
  return (
    <header className={css.Searchbar}>
      <form
        className={css.SearchForm}
        onSubmit={e => {
          e.preventDefault();
          const input = e.target[1];
          onSubmit(input.value  || '');
        }}
      >
        <button type="submit" className={css["SearchForm-button"]}>
          <span className={css["SearchForm-button-label"]}>Search</span>
        </button>

        <input
          className={css["SearchForm-input"]}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}