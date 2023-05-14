import { Component } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "./App.styled";

import { fetchImages } from "../ApiPixabay/Api";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Modal/Modal";

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: '',
    page: 1,
    error: null,
    showModal: false,
    largeImageURL: null,
  };


  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const { page } = this.state;

    if (prevQuery !== nextQuery || (prevState.page !== page && page !== 1)) {
      this.getImages();
    }
  }
  getImages  = () => {
    const { query, page } = this.state;
    const perPage = 12;

    this.setState({ isLoading: true });

    fetchImages(query, page, perPage)
    .then(({ hits, totalHits }) => {
      const totalPages = Math.ceil(totalHits / perPage);

      if (hits.length === 0) {
        toast.error('Sorry, no images found. Please, try again!');
      return;
      }
  

      if (page === 1) {
        toast.success(`Hooray! We found ${totalHits} images.`);
      }

      if (page === totalPages) {
        toast.info("You've reached the end of search results.");
      }

      const data = hits.map(({ id, webformatURL, largeImageURL, tags }) => {
        return {
          id,
          webformatURL,
          largeImageURL,
          tags,
        };
      });

      this.setState(({ images }) => ({
        images: [...images, ...data],
        total: totalHits,
      }));
    })
    .catch(error => this.setState({ error }))
    .finally(() => this.setState({ isLoading: false }));
  }

  // handleFormSubmit = e => {
  //   this.setState({ query: e, images: [], page: 1 });
  
  // }
  handleFormSubmit = query => {
    if (query === this.state.query) return;
    this.setState({
      images: [],
      query,
      page: 1,
      error: null,
    });
  };
  
  onLoadMoreBtn = () => {
    this.setState(({ page }) => ({
      page: page + 1,
      isLoading: true,
    }));
  };

  toggleModal = largeImageURL => {
    this.setState(showModal => ({
      showModal: !showModal,
    }))
    this.setState({ largeImageURL: largeImageURL });
  }
  render(){
    const { images,isLoading, error, total, showModal,largeImageURL, tags}= this.state;
    const loadImages = images.length !== 0;
    const isLastPage = images.length === total;
    const loadMoreBtn = loadImages && !isLoading && !isLastPage;
    
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit}/>

        {error && toast.error(error.message)}
        {isLoading && <Loader />}
        
        {loadImages && (
          <ImageGallery images={images}
          onClick={this.toggleModal}/>
        )}

        {loadMoreBtn && (
          <Button text="Load more" clickHandler={this.onLoadMoreBtn} />
        )}       
{/* {loadMoreBtn && <Button text="Load more" clickHandler={this.onLoadMoreBtn}>Load more</Button>} */}




        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
        
        <ToastContainer autoClose={3000}/>
      </Container>
    )
  }
}



