import SearchPanel from '../../components/searchPanel/SearchPanel';
import CardList from '../../components/cardList/CardList';

import './mainPage.scss';

const MainPage = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__wrapper">
          <h2 className="main__title">Home page</h2>
          <SearchPanel />
          <CardList />
        </div>
      </div>
    </main>
  );
};

export default MainPage;
