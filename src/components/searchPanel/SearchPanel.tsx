import { useDispatch, useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ISearchForm } from '../../types/types';
import { searchUpdated } from '../../pages/MainPage/mainPageSlice';
import { RootState } from '../../store';

import './searchPanel.scss';

const SearchPanel = () => {
  const search = useSelector((state: RootState) => state.mainPage.search);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<ISearchForm>({
    defaultValues: { search },
  });

  const onSubmit: SubmitHandler<ISearchForm> = ({ search }) => {
    dispatch(searchUpdated(search));
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
