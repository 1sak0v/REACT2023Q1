import { Link } from 'react-router-dom';
import error from './error.gif';
import './errorPage.scss';

const ErrorPage = () => {
  return (
    <div className="error">
      <img src={error} alt="error" className="error__img" />
      <Link to="/" className="error__link">
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
