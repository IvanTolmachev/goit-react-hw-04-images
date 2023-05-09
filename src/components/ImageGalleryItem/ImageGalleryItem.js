import PropTypes from 'prop-types';
import { List, Img } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ src, alt, srcLarge, modalOpen }) {
  return (
    <List>
      <Img src={src} alt={alt} data-modal={srcLarge} onClick={modalOpen} />
    </List>
  );
}

ImageGalleryItem.propTypes = {
  modalOpen: PropTypes.func,
  src: PropTypes.string,
  alt: PropTypes.string,
  srcLarge: PropTypes.string,
};
