import data from '../../data/data';
import Card from '../card/Card';

import './cardList.scss';

const CardList = () => {
  const cards = data.map((card) => <Card key={card.id} {...card} />);
  return (
    <div className="card">
      <ul className="card__list">{cards}</ul>
    </div>
  );
};

export default CardList;
