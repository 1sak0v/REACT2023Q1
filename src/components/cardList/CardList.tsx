import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store';
import { getCharacters, idUpdated } from '../../pages/MainPage/mainPageSlice';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Modal from '../modal/Modal';
import CardInfo from '../cardInfo/CardInfo';

import './cardList.scss';

const CardList = () => {
  const search = useSelector((state: RootState) => state.mainPage.search);
  const characters = useSelector((state: RootState) => state.mainPage.characters);
  const charactersLoadingStatus = useSelector(
    (state: RootState) => state.mainPage.charactersLoadingStatus
  );
  const id = useSelector((state: RootState) => state.mainPage.characterId);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCharacters(search));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const onOpenModal = (id: number) => {
    dispatch(idUpdated(id));
  };

  const onCloseModal = () => {
    dispatch(idUpdated(null));
  };

  if (charactersLoadingStatus === 'loading') {
    return <Spinner />;
  } else if (charactersLoadingStatus === 'error') {
    return <ErrorMessage />;
  }

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
