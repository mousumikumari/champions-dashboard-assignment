import React from 'react';
import ReactDOM from 'react-dom';
import ChampionInfo from './ChampionInfo';
import './Modal.css';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal-popup">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <div className="cross-symbol">&times;</div>
            <ChampionInfo />
          </button>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;

