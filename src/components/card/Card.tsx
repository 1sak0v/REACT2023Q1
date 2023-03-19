import { TData } from '../../types/types';

import './card.scss';

const Card = ({ name, description, thumbnail }: TData) => {
  return (
    <li className="card-item">
      <img src={thumbnail} alt={name} className="card-item__thumbnail" />
      <h2 className="card-item__title">{name}</h2>
      <div className="card-item__descr">{description}</div>
    </li>
  );
};

export default Card;
