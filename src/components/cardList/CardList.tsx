import { useEffect, useState } from 'react';

import { TCardListProps, TCharacter } from '../../types/types';
import useMarvelService from '../../service/marvelService';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Modal from '../modal/Modal';
import CardInfo from '../cardInfo/CardInfo';

import './cardList.scss';

const CardList = ({ search }: TCardListProps) => {
  const [characters, setCharacters] = useState<TCharacter[]>([]);
  const [id, setId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const { getAllCharacters } = useMarvelService();

  useEffect(() => {
    setLoading(true);
    getAllCharacters(search)
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [search]);

  const onOpenModal = (id: number) => {
    setId(id);
  };

  const onCloseModal = () => {
    setId(null);
  };

  const cards = characters.map((card) => <Card key={card.id} {...card} onOpen={onOpenModal} />);
  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const content = loading || error ? null : cards;
  return (
    <div className="card">
      {spinner}
      {errorMessage}
      <ul className="card__list">{content}</ul>
      {cards.length === 0 && !loading && !error && (
        <p className="card__not-found">Characters not found</p>
      )}
      {id && (
        <Modal onClose={onCloseModal}>
          <CardInfo id={id} onClose={onCloseModal} />
        </Modal>
      )}
    </div>
  );
};

export default CardList;
