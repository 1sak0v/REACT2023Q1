import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TProfile } from '../../types/types';
import Form from '../form/Form';
import ProfileList from '../profileList/ProfileList';

const FormPage = () => {
  const [profiles, setProfiles] = useState<Array<TProfile>>([]);

  const addProfile = (
    name: string,
    birthday: string,
    continent: string,
    skills: string[],
    gender: string,
    picture: string
  ): void => {
    const newProfile: TProfile = {
      id: uuidv4(),
      name,
      birthday,
      continent,
      skills,
      gender,
      picture,
    };
    setProfiles((profiles) => [...profiles, newProfile]);
  };

  return (
    <main className="main">
      <div className="container">
        <div className="main__wrapper">
          <h2 className="main__title">Form</h2>
          <Form addProfile={addProfile} />
          <ProfileList profiles={profiles} />
        </div>
      </div>
    </main>
  );
};

export default FormPage;
