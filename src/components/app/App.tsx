import { Routes, Route, Navigate } from 'react-router-dom';

import Header from '../header/Header';
import MainPage from '../mainPage/MainPage';
import AboutPage from '../aboutPage/AboutPage';
import ErrorPage from '../errorPage/ErrorPage';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        <Route path="404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  );
}

export default App;
