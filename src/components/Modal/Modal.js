import PropTypes from 'prop-types';
import { Component } from 'react';
import { BoxModal, ModalWindowBox } from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    modalClose: PropTypes.func,
    children: PropTypes.node,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.modalClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target.id === 'backdrop') {
      this.props.modalClose();
    }
  };

  render() {
    return (
      <BoxModal id={'backdrop'} onClick={this.handleBackdropClick}>
        <ModalWindowBox>{this.props.children}</ModalWindowBox>
      </BoxModal>
    );
  }
}
