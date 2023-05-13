import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from 'components/Modal/Modal.module.css';

import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modalRoot');

function Modal({ onClose, children }) {

  useEffect(() => {
    function onEscapeClose(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', onEscapeClose);
    return () => window.removeEventListener('keydown', onEscapeClose);
  }, [onClose]);


    function onBackdropClose(e) {
    if (e.currentTarget !== e.target) {
      onClose();
    }
  }

  return createPortal(
      <div onClick={onBackdropClose} className={css.modal__backdrop}>
            <div className={css.modal__content}>
                {children}
        </div>
      </div>,
      modalRoot
    );
  
}

export default Modal;

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};


// export function Modal({ onCloseModal, largeImage, tags }) {
//   useEffect(() => {
//     function handleCloseECC(e) {
//       if (e.key === 'Escape') {
//         onCloseModal();
//       }
//     }

//     window.addEventListener('keydown', handleCloseECC);

//     return () => window.removeEventListener('keydown', handleCloseECC);
//   }, [onCloseModal]);

//   function handleCloseBackdrop(e) {
//     if (e.currentTarget === e.target) {
//       onCloseModal();
//     }
//   }

//   return createPortal(
//     <div className="Overlay" onClick={handleCloseBackdrop}>
//       <div className="Modal">
//         <img src={largeImage} alt={tags} width="1000" />
//       </div>
//     </div>,
//     modalRoot
//   );
// }

// Modal.propTypes = {
//   onCloseModal: PropTypes.func.isRequired,
//   largeImage: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
// };