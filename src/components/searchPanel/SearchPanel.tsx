import { Component } from 'react';

import { ISearchProps, ISearchState } from '../../types/types';

import './searchPanel.scss';

class SearchPanel extends Component {
  state: ISearchState = {
    search: '',
  };

  setSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const search = e.currentTarget.value;
    this.setState({
      search,
    });
  };

  componentDidMount(): void {
    if (localStorage.getItem('search')) {
      const search = localStorage.getItem('search');
      this.setState({
        search,
      });
    }
  }

  // componentDidUpdate(prevProps: Readonly<ISearchProps>, prevState: Readonly<ISearchState>): void {
  //   if (prevState.search !== this.state.search) {
  //     const { search } = this.state;
  //     localStorage.setItem('search', search);
  //   }
  // }

  componentWillUnmount(): void {
    const { search } = this.state;
    localStorage.setItem('search', search);
  }

  render(): JSX.Element {
    return (
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search..."
          value={this.state.search}
          onChange={this.setSearch}
        />
      </div>
    );
  }
}

export default SearchPanel;
