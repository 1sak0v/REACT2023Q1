import { render } from '@testing-library/react';
import ProfileList from '../components/profileList/ProfileList';

describe('ProfileList component', () => {
  const profiles = [
    {
      id: 1,
      name: 'John Doe',
      birthday: '01/01/1990',
      continent: 'North America',
      skills: ['JavaScript', 'React', 'HTML', 'CSS'],
      gender: 'Male',
      image: 'https://example.com/profile1.jpg',
    },
  ];

  it('renders all profiles correctly', () => {
    const { getAllByRole } = render(<ProfileList profiles={profiles} />);
    const cardElements = getAllByRole('listitem');
    expect(cardElements).toHaveLength(profiles.length);
  });
});
