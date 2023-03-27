const validateBirthday = (birthday: React.RefObject<HTMLInputElement>): boolean => {
  if (!birthday.current) return true;

  const value = birthday.current.value;

  if (value === '') return true;
  if (Date.parse(value) > Date.now()) return true;

  return false;
};

export default validateBirthday;
