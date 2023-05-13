import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from 'components/Searchbar/Searchbar.module.css'
import Notiflix from 'notiflix';


function Searchbar({onSubmit}) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  }
  
  const handleSubmit = e =>  {
    e.preventDefault();
    
    if (query.trim() === '') {
       return Notiflix.Notify.info('The search field is empty, please try again.');
     }
    onSubmit(query);
    setQuery('');
  }
  
  return (
            <header className={css.searchbar}>
  <form className={css.form} onSubmit={handleSubmit}>
  
    <input
    className={css.input}
    name="query"
      type="text"
      value={query}
      onChange={handleChange}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
              />
              <button type="submit" className={css.button}>
      <span className={css.button_label}>Search</span>
    </button>
  </form>
</header>
        )
}

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;



