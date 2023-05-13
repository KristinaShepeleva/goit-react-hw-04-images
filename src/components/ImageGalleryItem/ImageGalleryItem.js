import { useState } from 'react';

import PropTypes from 'prop-types';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css'

import Modal from 'components/Modal/Modal';
import Controls from 'components/Controls/Controls';


function ImageGalleryItem({ image, index, images }) {
  const [shownModal, setShownModal] = useState(false);
  const [indexSt, setIndex] = useState(index);

    const onModal = () => {
    setShownModal(prevState => !prevState);
  };

  const changeIndex = value => {
    setIndex(prevState => prevState + value )
  };

     const totalItems = images.length;
     const currentItem = images[indexSt];


   return (
      <li onClick={onModal} className={css.gallery_item}>
        <img
          className={css.gallery_item_img}
          src={image.webformatURL}
          alt={image.tags}
        />
        {shownModal && <Modal onClose={onModal}>
          <img src={currentItem.largeImageURL} alt={currentItem.tags} />
          <Controls
          current={indexSt + 1}
          total={totalItems}
          onChange={changeIndex} />
         
        </Modal>}
      </li>
    );
}

ImageGalleryItem.propTypes = {
  index: PropTypes.number.isRequired,
  images: PropTypes.array,
  image: PropTypes.shape({ 
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    })
};

export default ImageGalleryItem;

