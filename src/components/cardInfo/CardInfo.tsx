import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store';
import { TCardInfoProps } from '../../types/types';
import { getCharacter } from '../../pages/MainPage/mainPageSlice';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './cardInfo.scss';

const CardInfo = ({ id, onClose }: TCardInfoProps) => {
  const character = useSelector((state: RootState) => state.mainPage.character);
  const characterLoadingStatus = useSelector(
    (state: RootState) => state.mainPage.characterLoadingStatus
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCharacter(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (characterLoadingStatus === 'loading') {
    return <Spinner />;
  } else if (characterLoadingStatus === 'error') {
    return <ErrorMessage />;
  }

  return (
    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
      {character && (
        <>
          <div className="modal-card__close" onClick={onClose}>
            &#215;
          </div>
          <img src={character.thumbnail} alt={character.name} className="modal-card__img" />
          <h2 className="modal-card__name">{character.name}</h2>
          <div className="modal-card__descr">{character.description}</div>
          <h3 className="modal-card__subheader">Comics:</h3>
          <ul className="modal-card__comics">
            {character.comics.length === 0 && <li className="modal-card__serie">No comics</li>}
            {character.comics.slice(0, 2).map((comic, i) => (
              <li key={i} className="modal-card__comic">
                {comic.name}
              </li>
            ))}
          </ul>
          <h3 className="modal-card__subheader">Series:</h3>
          <ul className="modal-card__series">
            {character.series.length === 0 && <li className="modal-card__serie">No series</li>}
            {character.series.slice(0, 2).map((serie, i) => (
              <li key={i} className="modal-card__serie">
                {serie.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CardInfo;
