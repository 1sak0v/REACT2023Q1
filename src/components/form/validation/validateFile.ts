const validateFile = (file: React.RefObject<HTMLInputElement>): boolean => {
  if (!file.current) return true;

  const value = file.current.value;

  if (value === '') return true;

  return false;
};

export default validateFile;
