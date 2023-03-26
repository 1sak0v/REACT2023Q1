const validateContinent = (continent: React.RefObject<HTMLSelectElement>): boolean => {
  if (!continent.current) return true;

  const value = continent.current.value;

  if (value === '') return true;

  return false;
};

export default validateContinent;
