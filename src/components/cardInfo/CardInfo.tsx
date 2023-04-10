import { useEffect, useState } from 'react';

import { TCardInfoProps, TCharacter } from '../../types/types';
import useMarvelService from '../../service/marvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './cardInfo.scss';

const CardInfo = (props: TCardInfoProps) => {
  const [character, setCharacter] = useState<TCharacter | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const { getCharacter } = useMarvelService();

  useEffect(() => {
    getCharacter(props.id)
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.id]);

  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  return (
    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
      {spinner}
      {errorMessage}
      {character && !error && (
        <>
          <div className="modal-card__close" onClick={props.onClose}>
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
