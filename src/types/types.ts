export interface ISearchState {
  search: string;
}

export interface ISearchProps {
  test?: string;
}

export type TData = {
  description: string;
  id: number;
  name: string;
  thumbnail: string;
};

export type TProfile = {
  id: number;
  name: string;
  birthday: string;
  continent: string;
  skills: string[];
  gender: string;
  picture: string;
};

export type TProfiles = {
  profiles: TProfile[];
};

export interface IFormProps {
  addProfile(
    name: string,
    birthday: string,
    continent: string,
    skills: string[],
    gender: string,
    picture: string
  ): void;
}

export interface IFormState {
  firstNameError: boolean;
  birthdayError: boolean;
  continentError: boolean;
  skillsError: boolean;
  genderError: boolean;
  fileError: boolean;
  success: boolean;
  disabledSubmit: boolean;
}

export interface IFrom {
  name: string;
  birthday: string;
  continent: string;
  skills: string[];
  gender: string;
  picture: FileList;
}

export type TFormProps = {
  addProfile: (
    name: string,
    birthday: string,
    continent: string,
    skills: string[],
    gender: string,
    picture: string
  ) => void;
};
