import { useGetCharacterQuery } from '../../service/apiSlice';
import { TCardInfoProps } from '../../types/types';
import useMarvelService from '../../service/marvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './cardInfo.scss';

const CardInfo = ({ id, onClose }: TCardInfoProps) => {
  const { _transformChar } = useMarvelService();

  const { isLoading, data = { data: { results: [] } }, isError } = useGetCharacterQuery(id);

  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <ErrorMessage />;
  }

  const character = _transformChar(data.data.results[0]);

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
