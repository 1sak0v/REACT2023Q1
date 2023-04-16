import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProfileList from '../components/profileList/ProfileList';

const mockStore = configureStore([]);

describe('ProfileList component', () => {
  const store = mockStore({
    formPage: {
      profiles: [
        {
          id: '1',
          name: 'Anton',
          birthday: '08/08/2001',
          continent: 'Europe',
          skills: ['html'],
          gender: 'male',
          picture: 'test.jpeg',
        },
      ],
    },
  });

  it('should render a list of profiles', () => {
    render(
      <Provider store={store}>
        <ProfileList />
      </Provider>
    );

    const profileElements = screen.getAllByRole('listitem');

    expect(profileElements).toHaveLength(1);
  });
});
