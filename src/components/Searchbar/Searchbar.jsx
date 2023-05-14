import { Component } from "react";
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { MdPageview } from 'react-icons/md';
import {
  SearchHeader,
  SearchForm,
  SearchFormInput,
  SearchButton,
} from './SearchBar.styled'

export class Searchbar extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
      };
    state = {
      query: '',

    };

handleChange = e => {
    this.setState({ query: e.currentTarget.value });
}

handleSubmit = e => {
    e.preventDefault();
    // this.reset();
    if (this.state.query.trim() === '') {
      // Notify.error('Please specify your query!');

        toast.error('Please specify your query!');
        return;
    }
    this.props.onSubmit(this.state.query);
    this.reset();
}


reset = () => {
    this.setState({
        query: '',
    });

  };

render(){
  const { query } = this.state;
    return (
        <SearchHeader>
          <SearchForm  onSubmit={this.handleSubmit}>
            <SearchButton  type="submit" >
            <MdPageview style={{ width: 30, height: 30 }} />
              {/* <span >Search</span> */}
            </SearchButton >
            <SearchFormInput
              type="text"
              name="query"
              value={query}
              onChange={this.handleChange}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm >
        </SearchHeader>
          );
}
}
// componentDidUpdate(prevProps, prevState) {
//     const prevQuery = prevState.query;
//     const nextQuery = this.state.query;
//     const { page } = this.state;

//     if (prevQuery !== nextQuery || (prevState.page !== page && page !== 1)) {
//       this.fetchImages();
//     }
//   }


