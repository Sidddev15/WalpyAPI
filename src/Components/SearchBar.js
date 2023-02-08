import './searchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className='Search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>WalpyAPI</label>
        <input value={term} onChange={handleChange} placeholder='Search' />
      </form>
    </div>
  );
}

export default SearchBar;
