import { createPortal } from 'react-dom';
import { Component } from 'react';
// import PropTypes from 'prop-types';

import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component  {
//   static propTypes = {
//     onClick: PropTypes.func,
//     onClose: PropTypes.func,
//     children: PropTypes.node.isRequired,
//   };

  componentDidMount() {
    window.addEventListener('keydown', this.closeEscModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeEscModal);
  }

  closeEscModal = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>{this.props.children}</ModalWindow>
        {/* <button type="button" onClick={this.props.onClose}>
          <GrClose style={{ width: 30, height: 30 }} />
        </button> */}
      </Overlay>,
      modalRoot
    );
  }
}
