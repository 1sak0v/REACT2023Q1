import { Routes, Route } from 'react-router-dom';

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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
