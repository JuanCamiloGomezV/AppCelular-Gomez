import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";

const ModalPhoto = ({ isVisible, onClose }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    onClose && onClose(!modalVisible); // llama a la función onClose si se proporciona
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          console.log("Modal cerrado");
          toggleModal();
        }}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalWrapper}>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default ModalPhoto;

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    backgroundColor: "white",
    padding: 20,

    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: "white",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
});
