import { useEffect, useState, useRef } from 'react';

import './searchPanel.scss';

const SearchPanel = () => {
  const [search, setSearch] = useState('');
  const searchRef = useRef(search);

  useEffect(() => {
    const search = localStorage.getItem('search') || '';
    setSearch(search);
    return () => {
      localStorage.setItem('search', searchRef.current);
    };
  }, []);

  useEffect(() => {
    searchRef.current = search;
  }, [search]);

  const onUpdateSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const search = e.currentTarget.value;
    setSearch(search);
  };

  return (
    <div className="search">
      <input
        type="search"
        name="search"
        className="search__input"
        placeholder="Search..."
        value={search}
        onChange={onUpdateSearch}
      />
    </div>
  );
};

export default SearchPanel;
