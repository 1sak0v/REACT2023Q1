import { Routes, Route } from 'react-router-dom';
import AboutPage from '../aboutPage/aboutPage';
import MainPage from '../mainPage/MainPage';
import ErrorPage from '../errorPage/ErrorPage';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
