// import propTypes from 'prop-types';


export const ImageGalleryItem = ({ webformatURL,
    // largeImageURL,
    tags }) => {
  return (
    <li>
      <img
        src={webformatURL} alt={tags}
      />
    </li>
  );
};

// ImageGalleryItem.propTypes = {
//   image: propTypes.shape({
//     webformatURL: propTypes.string.isRequired,
//     tags: propTypes.string.isRequired,
//   }).isRequired,
//   toggleModal: propTypes.func.isRequired,
// };




// import PropTypes from 'prop-types';

// export const ImageGalleryItem = ({   
//     webformatURL,
//     largeImageURL,
//     tags,
//     clickHandler, 
//     }) => (
//         <li onClick={() => {
//             clickHandler(largeImageURL);
//         }}>
//             <img src={webformatURL} alt={tags} />
//         </li>
//     );

// ImageGalleryItem.propTypes = {
//     webformatURL: PropTypes.string.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
//   };


