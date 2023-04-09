import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import ImageSelector from "./ImageSelector";
import TextStyle from "../constants/TextStyle";
import { addPlace } from "../store/actions/photo.action";
import { useDispatch } from "react-redux";

const ModalPhoto = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const [titleValue, setTitleValue] = useState("");
  const [imageValue, setImageValue] = useState("");

  const savePlaceHandler = () => {
    dispatch(addPlace(titleValue, imageValue));
    toggleModal();
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    onClose && onClose(!modalVisible); // llama a la función onClose si se proporciona
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          console.log("Modal cerrado");
          toggleModal();
        }}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalWrapper}>
            <View style={styles.modal}>
              <ImageSelector
                onImage={(image) => setImageValue(image)}
                savePlaceHandler={savePlaceHandler}
              />
              <TouchableOpacity onPress={toggleModal} style={styles.button}>
                <View style={styles.containerIcon}>
                  <AntDesign name="close" size={20} color="black" />
                </View>
                <Text style={styles.textButton}>Cerrar</Text>
              </TouchableOpacity>
            </View>
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
  },
  modal: {
    backgroundColor: "white",
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: "white",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  button: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  textButton: {
    color: "black",
    fontFamily: TextStyle.textRegular,
    fontWeight: "bold",
    fontSize: 16,
  },
  containerIcon: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
  },
});
