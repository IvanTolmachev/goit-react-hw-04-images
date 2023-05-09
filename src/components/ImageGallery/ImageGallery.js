import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Item } from './ImageGallery.styled';

export function ImageGallery({ images, modalOpen }) {
  return (
    <Item>
      {images.map(image => {
        return (
          <ImageGalleryItem
            modalOpen={modalOpen}
            key={image.id}
            src={image.src}
            alt={image.alt}
            srcLarge={image.srcLarge}
          />
        );
      })}
    </Item>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      id: PropTypes.number,
      srcLarge: PropTypes.string,
    })
  ),
  modalOpen: PropTypes.func,
};
