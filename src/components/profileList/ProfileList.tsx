import Profile from '../profile/Profile';
import { TProfiles } from '../../types/types';

import './profileList.scss';

const ProfileList = (props: TProfiles) => {
  const profiles = props.profiles.map((prof) => <Profile key={prof.id} {...prof} />);
  return (
    <div className="profile">
      <ul className="profile__list">{profiles}</ul>
    </div>
  );
};

export default ProfileList;
