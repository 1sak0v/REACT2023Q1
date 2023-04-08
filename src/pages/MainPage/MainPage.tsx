import { useState } from 'react';

import SearchPanel from '../../components/searchPanel/SearchPanel';
import CardList from '../../components/cardList/CardList';

import './mainPage.scss';

const MainPage = () => {
  const [search, setSearch] = useState(localStorage.getItem('search') ?? '');

  const onUpdateSearch = (search: string): void => {
    setSearch(search);
  };

  return (
    <main className="main">
      <div className="container">
        <div className="main__wrapper">
          <h2 className="main__title">Home page</h2>
          <SearchPanel onUpdateSearch={onUpdateSearch} />
          <CardList search={search} />
        </div>
      </div>
    </main>
  );
};

export default MainPage;
