import { TProfile } from '../../types/types';

const Profile = ({ name, birthday, continent, skills, gender, image }: TProfile) => {
  return (
    <li className="profile-item">
      <img className="profile-item__img" src={image} alt={name} />
      <h2>{name}</h2>
      <p>Birthday: {birthday}</p>
      <p>Location: {continent}</p>
      <p>Skills: {skills.join(', ')}</p>
      <p>Gender: {gender}</p>
    </li>
  );
};

export default Profile;
