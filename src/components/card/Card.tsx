import { TCardProps } from '../../types/types';

import './card.scss';

const Card = ({ id, name, thumbnail, onOpen }: TCardProps) => {
  return (
    <li className="card-item" onClick={() => onOpen(id)}>
      <img src={thumbnail} alt={name} className="card-item__thumbnail" />
      <h2 className="card-item__title">{name}</h2>
    </li>
  );
};

export default Card;
