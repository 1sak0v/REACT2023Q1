import { Component } from 'react';

import data from '../../data/data';
import Card from '../card/Card';

import './cardList.scss';

class CardList extends Component {
  state = {
    cards: data,
  };

  render() {
    const cards = this.state.cards.map((card) => <Card key={card.id} {...card} />);
    return (
      <div className="card">
        <ul className="card__list">{cards}</ul>
      </div>
    );
  }
}

export default CardList;
