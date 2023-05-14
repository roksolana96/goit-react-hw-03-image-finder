import { Component } from "react";
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { MdPageview } from 'react-icons/md';

export class Searchbar extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
      };
    state = {
      query: '',

    };

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
handleChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
}

reset = () => {
    this.setState({
        query: '',
    });

  };

render(){
    return (
        <header>
          <form onSubmit={this.handleSubmit}>
            <button type="submit" >
            <MdPageview style={{ width: 30, height: 30 }} />
              {/* <span >Search</span> */}
            </button>
            <input
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </form>
        </header>
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


