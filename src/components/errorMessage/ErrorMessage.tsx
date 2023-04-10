import error from './close.png';

const ErrorMessage = () => {
  return (
    <>
      <p style={{ fontSize: 24 }}>Some error, please repeat your request</p>
      <img style={{ width: 150, marginTop: 20 }} src={error} alt="error" />
    </>
  );
};

export default ErrorMessage;
