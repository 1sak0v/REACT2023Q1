import { Component } from 'react';
import ProfileList from '../../profileList/ProfileList';
import { TProfiles } from '../../types/types';

import Form from '../form/Form';

class FormPage extends Component<never, TProfiles> {
  id = 1;
  state = {
    profiles: [],
  };

  addProfile = (
    name: string,
    birthday: string,
    continent: string,
    skills: string[],
    gender: string,
    image: string
  ): void => {
    const newProfile = {
      id: this.id++,
      name,
      birthday,
      continent,
      skills,
      gender,
      image,
    };
    this.setState(({ profiles }) => ({
      profiles: [...profiles, newProfile],
    }));
  };

  render() {
    const { profiles } = this.state;
    return (
      <main className="main">
        <div className="container">
          <div className="main__wrapper">
            <h2 className="main__title">Form</h2>
            <Form addProfile={this.addProfile} />
            <ProfileList profiles={profiles} />
          </div>
        </div>
      </main>
    );
  }
}

export default FormPage;
