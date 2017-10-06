import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { hideModal } from '../actions/viewActions';

class NotificationModal extends Component {
  static propTypes = {
    hideModal: PropTypes.func,
    view: PropTypes.shape({
      modalVisible: PropTypes.boolean,
      modalTitle: PropTypes.string,
      modalMessage: PropTypes.string,
    }),
  };

  render() {
    const { view, hideModal } = this.props;
    const { modalVisible,
      modalTitle,
      modalMessage,
    } = view;

    return (
      <Modal show={modalVisible} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalMessage}
        </Modal.Body>
      </Modal>
    );
  }
}

export default connect(
  state => ({
    auth: state.auth,
    view: state.view,
  }),
  {
    hideModal,
  }
)(NotificationModal);
