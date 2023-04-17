import error from './close.png';

const ErrorMessage = () => {
  return (
    <div style={{ margin: '20 auto', textAlign: 'center' }}>
      <p style={{ fontSize: 24 }}>Some error, please repeat your request</p>
      <img style={{ width: 150, marginTop: 20 }} src={error} alt="error" />
    </div>
  );
};

export default ErrorMessage;
