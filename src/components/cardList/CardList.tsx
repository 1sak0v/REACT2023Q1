import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store';
import { idUpdated } from '../../pages/MainPage/mainPageSlice';
import { useGetCharactersQuery } from '../../service/apiSlice';
import { TResultsCharacter } from '../../types/types';
import useMarvelService from '../../service/marvelService';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Modal from '../modal/Modal';
import CardInfo from '../cardInfo/CardInfo';

import './cardList.scss';

const CardList = () => {
  const seacrh = useSelector((state: RootState) => state.mainPage.search);
  const id = useSelector((state: RootState) => state.mainPage.characterId);
  const dispatch = useDispatch<AppDispatch>();

  const { _transformChar } = useMarvelService();

  const { isLoading, data = { data: { results: [] } }, isError } = useGetCharactersQuery(seacrh);

  const onOpenModal = (id: number) => {
    dispatch(idUpdated(id));
  };

  const onCloseModal = () => {
    dispatch(idUpdated(null));
  };

  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <ErrorMessage />;
  }

  const characters = data.data.results.map((datum: TResultsCharacter) => _transformChar(datum));
  const cards = characters.map((card) => <Card key={card.id} {...card} onOpen={onOpenModal} />);

  return (
    <div className="card">
      <ul className="card__list">{cards}</ul>
      {cards.length === 0 && <p className="card__not-found">Characters not found</p>}
      {id && (
        <Modal onClose={onCloseModal}>
          <CardInfo id={id} onClose={onCloseModal} />
        </Modal>
      )}
    </div>
  );
};

export default CardList;
