import { useSelector } from 'react-redux';

import Profile from '../profile/Profile';
import { RootState } from '../../store';

import './profileList.scss';

const ProfileList = () => {
  const profiles = useSelector((state: RootState) => state.formPage.profiles);

  const content = profiles.map((profile) => <Profile key={profile.id} {...profile} />);
  return (
    <div className="profile">
      <ul className="profile__list">{content}</ul>
    </div>
  );
};

export default ProfileList;
