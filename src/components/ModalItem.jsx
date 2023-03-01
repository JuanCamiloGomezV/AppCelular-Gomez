import { Modal, StyleSheet, Text, View } from "react-native";

import Button from "./Button";
import React from "react";

const ModalItem = ({
  modalVisible,
  setModalVisible,
  selectedItem,
  setSelectedItem,
  removeItem,
  completedItem,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {selectedItem?.name}
        </Text>
        <Text
          style={{
            textAlign: "center",
          }}
        >
          Seleccione una opción
        </Text>
        <View style={styles.modalActions}>
          <Button
            title={selectedItem?.completed ? "Cambiar a No realizado" : "Cambiar a Realizado"}
            styleButtonType={styles.buttonCompleted}
            styleTextButton={styles.textButton}
            onPress={() => {
                completedItem(selectedItem.id);
            }}
          />
        </View>
        <View style={styles.modalActions}>
          <Button
            title="Cancelar"
            styleButtonType={styles.buttonCancel}
            styleTextButton={styles.textButton}
            onPress={() => {
              setSelectedItem(null);
              setModalVisible(false);
            }}
          />
          <Button
            title="Eliminar"
            styleButtonType={styles.buttonDelete}
            styleTextButton={styles.textButton}
            onPress={() => {
              removeItem(selectedItem.id);
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        ></View>
      </View>
    </Modal>
  );
};

export default ModalItem;

const styles = StyleSheet.create({
  modalActions: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  modalContainer: {
    marginTop: "50%",
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  buttonCancel: {
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    width: "40%",
    height: "auto",
  },
  buttonDelete: {
    backgroundColor: "#da3e3e",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    width: "40%",
    height: "auto",
  },
  buttonCompleted: {
    backgroundColor: "#00b5fd",
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    marginHorizontal: 10,
    height: "auto",
  },
  textButton: {
    textAlign: "center",
    color: "white",
  },
});
