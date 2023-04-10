import { SubmitHandler, useForm } from 'react-hook-form';

import { TSearchForm, TSearchPanelProps } from '../../types/types';

import './searchPanel.scss';

const SearchPanel = ({ onUpdateSearch }: TSearchPanelProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { search: localStorage.getItem('search') ?? '' },
  });

  const onSubmit: SubmitHandler<TSearchForm> = ({ search }) => {
    localStorage.setItem('search', search);
    onUpdateSearch(search);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="search"
          className="search__input"
          placeholder="Search..."
          {...register('search')}
        />
      </form>
    </div>
  );
};

export default SearchPanel;
