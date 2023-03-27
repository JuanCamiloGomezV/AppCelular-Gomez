import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Colors from "../constants/Colors";
import React from "react";
import TextStyle from "../constants/TextStyle";

const ModalCart = ({ modalVisible, setModalVisible, onDelete, item }) => {
  const deleteProduct = () => {
    onDelete(item.id);
    setModalVisible(!modalVisible);
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        console.log("Modal has been closed.");
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={[styles.modalText,{fontFamily:TextStyle.titleRegular, fontSize:18}]}>Algo cambiara en tu carrito!</Text>
          <Text style={styles.modalText}>¿Estas seguro de eliminar este producto del carrito?</Text>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={[styles.button, styles.buttonClose]}
          >
            <Text style={styles.textStyle}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={deleteProduct}
            style={[styles.button, styles.buttonDelete]}
          >
            <Text style={[styles.textStyle,{color:Colors.primary}]}>Sí, estoy seguro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalCart;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 20,
  },
  modalView: {
    width:'100%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    width:'100%',
    marginVertical:5
  },
  buttonDelete: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.primary,

  },
  buttonClose: {
    backgroundColor: Colors.primary
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: TextStyle.textRegular
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: TextStyle.textRegular
  },
});
