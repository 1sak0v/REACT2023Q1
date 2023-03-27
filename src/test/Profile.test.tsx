import { render } from '@testing-library/react';
import Profile from '../components/profile/Profile';

describe('Profile component', () => {
  const profile = {
    id: 1,
    name: 'John Doe',
    birthday: '01/01/1990',
    continent: 'North America',
    skills: ['JavaScript', 'React', 'HTML', 'CSS'],
    gender: 'Male',
    image: 'https://example.com/profile.jpg',
  };

  it('renders profile information correctly', () => {
    const { getByText, getByAltText } = render(<Profile {...profile} />);

    const nameElement = getByText(profile.name);
    expect(nameElement).toBeInTheDocument();

    const birthdayElement = getByText(`Birthday: ${profile.birthday}`);
    expect(birthdayElement).toBeInTheDocument();

    const locationElement = getByText(`Location: ${profile.continent}`);
    expect(locationElement).toBeInTheDocument();

    const skillsElement = getByText(`Skills: ${profile.skills.join(', ')}`);
    expect(skillsElement).toBeInTheDocument();

    const genderElement = getByText(`Gender: ${profile.gender}`);
    expect(genderElement).toBeInTheDocument();

    const imageElement = getByAltText(profile.name);
    expect(imageElement).toHaveAttribute('src', profile.image);
  });
});
