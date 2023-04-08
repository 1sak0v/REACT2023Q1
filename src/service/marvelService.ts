import { TCharacter, TCharactersData, TResultsCharacter } from '../types/types';

const useMarvelService = () => {
  const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = 'apikey=14f0a7010a2b4ca9b9e6c88156f7d418';

  const request = async <T>(
    url: string,
    method = 'GET',
    body = null,
    headers = { 'Content-Type': 'application/json' }
  ): Promise<T> => {
    const response = await fetch(url, { method, body, headers });
    return await response.json();
  };

  const getAllCharacters = async (name = ''): Promise<TCharacter[]> => {
    const searchParams = name ? `nameStartsWith=${name}&` : '';
    const res = await request<TCharactersData>(
      `${_apiBase}characters?limit=20&${searchParams}${_apiKey}`
    );
    return res.data.results.map((datum: TResultsCharacter) => _transformChar(datum));
  };

  // const getCharacter = async (id: number) => {
  //   const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
  //   return _transformChar(res.data.results[0]);
  // };

  const _transformChar = (char: TResultsCharacter): TCharacter => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? `${char.description}`
        : 'There is no description for this character',
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      comics: char.comics.items,
      series: char.comics.items,
    };
  };

  return { getAllCharacters };
};

export default useMarvelService;
