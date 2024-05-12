import { useState } from 'react';
import s from './ShopPage.module.scss';

const Search = (props) => {

  const [text, setText] = useState('');
  const [isActive, setIsActive] = useState(false);
  const handleChange = (e) => {
    if (e.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    setText(e.target.value);
  }

  return (
    <div className={`${s.search} ${isActive ? s.active : ''}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#413F4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.9984 21.0004L16.6484 16.6504" stroke="#413F4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <input  placeholder='Видеокарта GeForce RTX 4080' type="text" value={text} onChange={(e) => handleChange(e)}/>
    </div>
  )
}

export default Search;