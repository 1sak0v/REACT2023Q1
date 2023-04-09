import { ReactNode } from 'react';

export interface ISearchState {
  search: string;
}

export interface ISearchProps {
  test?: string;
}

export type TCardProps = {
  description: string;
  id: number;
  name: string;
  thumbnail: string;
  onOpen: (id: number) => void;
};

export type TProfile = {
  id: string;
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

export type TComiscItems = {
  name: string;
};

export type TResultsCharacter = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
    items: TComiscItems[];
  };
  series: {
    available: number;
    items: TComiscItems[];
  };
};

export type TCharactersData = {
  data: {
    offset: number;
    limit: number;
    total: number;
    conut: number;
    results: TResultsCharacter[];
  };
};

export type TCharacter = {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  comics: TComiscItems[];
  series: TComiscItems[];
};

export type TSearchForm = {
  search: string;
};

export type TSearchPanelProps = {
  onUpdateSearch: (search: string) => void;
};

export type TCardListProps = {
  search: string;
};

export type TModallProps = {
  children: ReactNode;
  onClose: () => void;
};

export type TCardInfoProps = {
  id: number;
  onClose: () => void;
};
