import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { getImages } from 'apiService/apiService';
import { AppDiv } from './App.styled';
import { useState, useEffect } from 'react';

export const App = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [loadMoreButton, setLoadMoreButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState('');

  useEffect(() => {
    if (searchInputValue === '') {
      return;
    }
    setLoader(true);
    const searchImg = async () => {
      try {
        const response = await getImages(searchInputValue, page);

        if (response.images.length === 0) {
          toast.error(`These are no images`);
          return;
        }

        if (page === 1) {
          toast.success(`We found ${response.totalHits} images`);
        }

        setImages(prevState => [...prevState, ...response.images]);
        setLoadMoreButton(page < Math.ceil(response.totalHits / 12));
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoader(false);
      }
    };
    searchImg();
  }, [searchInputValue, page]);

  const onReset = () => {
    setPage(1);
    setImages([]);
    setLoadMoreButton(false);
  };

  const handleSearchInput = e => {
    setSearchInputValue(e);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  const modalOpen = e => {
    if (e.target.nodeName === 'IMG') {
      setShowModal(true);
      setModalImgSrc(e.target.getAttribute('data-modal'));
    }
  };

  const modalClose = () => {
    setShowModal(false);
    setModalImgSrc('');
  };

  return (
    <AppDiv>
      <Searchbar onReset={onReset} handleSearchSubmit={handleSearchInput} />
      {images.length !== 0 && (
        <ImageGallery images={images} modalOpen={modalOpen} />
      )}
      {loader === true && <Loader />}
      {!loader && loadMoreButton && <Button onClick={loadMore} />}
      {showModal && (
        <Modal
          modalClose={modalClose}
          children={<img src={modalImgSrc} alt="" />}
        />
      )}
      <ToastContainer autoClose={2500} />
    </AppDiv>
  );
};
