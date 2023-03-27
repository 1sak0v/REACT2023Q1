const validateFirstName = (name: React.RefObject<HTMLInputElement>): boolean => {
  if (!name.current) return true;

  const value = name.current.value;

  if (value.length < 3) return true;
  if (!/^[A-ZА-ЯЁ][a-zа-яё]+$/.test(value)) return true;

  return false;
};

export default validateFirstName;
