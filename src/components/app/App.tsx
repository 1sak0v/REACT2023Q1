import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '../../pages/Layout/Layout';
import MainPage from '../../pages/MainPage/MainPage';
import AboutPages from '../../pages/AboutPage/AboutPage';
import FormPage from '../../pages/FormPage/FormPage';
import ErrorPage from '../../pages/NotFoundPage/ErrorPage';

import './app.scss';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPages />} />
          <Route path="form" element={<FormPage />} />
        </Route>
        <Route path="404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  );
};

export default App;
