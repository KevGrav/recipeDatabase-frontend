import React from 'react';
import '../styles/Modal.css';
const Modal = ({ children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {children}
      </div>
    </div>
  );
};

//  <button className="lpBtn2" onClick={() => setGameLevel('medium')}>Medium (5 letter words)</button>

export default Modal;