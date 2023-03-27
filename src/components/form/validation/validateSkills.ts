const validateSkills = (
  skill1: React.RefObject<HTMLInputElement>,
  skill2: React.RefObject<HTMLInputElement>,
  skill3: React.RefObject<HTMLInputElement>
): boolean => {
  if (!skill1.current || !skill2.current || !skill3.current) return true;

  const value1 = skill1.current.checked;
  const value2 = skill2.current.checked;
  const value3 = skill3.current.checked;

  if (value1 || value2 || value3) return false;

  return true;
};

export default validateSkills;
