import SearchPanel from '../searchPanel/SearchPanel';

import './mainPage.scss';

function MainPage() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__wrapper">
          <h2 className="main__title">Home page</h2>
          <SearchPanel />
        </div>
      </div>
    </main>
  );
}

export default MainPage;
