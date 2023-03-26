const validateGender = (
  male: React.RefObject<HTMLInputElement>,
  female: React.RefObject<HTMLInputElement>
): boolean => {
  if (!male.current || !female.current) return true;

  const value1 = male.current.checked;
  const value2 = female.current.checked;

  if (value1 || value2) return false;

  return true;
};

export default validateGender;
