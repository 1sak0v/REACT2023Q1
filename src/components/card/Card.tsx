import { TData } from '../../types/types';

import './card.scss';

const Card = ({ name, thumbnail }: TData) => {
  return (
    <li className="card-item">
      <img src={thumbnail} alt={name} className="card-item__thumbnail" />
      <h2 className="card-item__title">{name}</h2>
    </li>
  );
};

export default Card;
