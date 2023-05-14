// import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';


export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags}
        />
      ))}
    </ul>
  );
};

// ImageGallery.propTypes = {
//   images: propTypes.arrayOf(
//     propTypes.shape({
//       id: propTypes.number.isRequired,
//     })
//   ).isRequired,
//   toggleModal: propTypes.func.isRequired,
// };

// export const ImageGallery = ({ images,  }) => {
//   return (
//     <ul>
//       {images.map(({ id, webformatURL, largeImageURL, tags }) => (
//         <ImageGalleryItem
//           key={id}
//           webformatURL={webformatURL}
//           largeImageURL={largeImageURL}
//           tags={tags}
//           />
//       ))}
//     </ul>
//   );
// };

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     })
//   ),
//   onClick: PropTypes.func.isRequired,
// };