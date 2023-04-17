import ProfileList from '../../components/profileList/ProfileList';
import Form from '../../components/form/Form';

const FormPage = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__wrapper">
          <h2 className="main__title">Form</h2>
          <Form />
          <ProfileList />
        </div>
      </div>
    </main>
  );
};

export default FormPage;
