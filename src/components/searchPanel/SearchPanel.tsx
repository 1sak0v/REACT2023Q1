import { useEffect, useState } from 'react';

import './searchPanel.scss';

const SearchPanel = () => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const search = localStorage.getItem('search') || '';
    setSearch(search);
  }, []);

  useEffect(() => {
    localStorage.setItem('search', search);
  }, [search]);

  const onUpdateSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const search = e.currentTarget.value;
    setSearch(search);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search..."
        value={search}
        onChange={onUpdateSearch}
      />
    </div>
  );
};

export default SearchPanel;
