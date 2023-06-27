import React from 'react';
import { Modal } from 'react-native';

const DropdownModal = ({ visible, statusBarTranslucent, onRequestClose, children }) => {
  const defaults = {
    statusBarTranslucent: statusBarTranslucent || false,
  };
  return (
    <Modal
      onRequestClose={onRequestClose}
      supportedOrientations={['portrait', 'landscape']}
      animationType="none"
      transparent={true}
      statusBarTranslucent={defaults.statusBarTranslucent}
      visible={visible}
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {children}
    </Modal >
  );
};

export default DropdownModal;
