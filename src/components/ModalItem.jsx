import { Modal, StyleSheet, Text, View } from "react-native";

import Button from "./Button";
import React from "react";

const ModalItem = ({
  modalVisible,
  setModalVisible,
  selectedItem,
  setSelectedItem,
  removeItem,
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
            Eliminar Item
          </Text>
          <Text style={{
              textAlign: "center"
            }}>
            ¿Está seguro que desea eliminar el item {selectedItem?.name}?
          </Text>
          <View styles={styles.modalActions}>
            <Text>Holi</Text>
          <Button
                title="Cancelar"
                styleButtonType={styles.buttonCancel}
                onPress={() => {
                  setSelectedItem(null);
                  setModalVisible(false);
                }}
              />
              <Button
                title="Eliminar"
                styleButtonType={styles.buttonCancel}
                onPress={() => {
                  removeItem(selectedItem.id);
                }}
              />
          </View>
        </View>
      </Modal>
  );
};

export default ModalItem;

const styles = StyleSheet.create({
  modalContainer: {
    marginTop:"60%",
    marginHorizontal:20,
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
  modalActions: {
    flex: 6,
    backgroundColor:"blue",
    flexDirection: "row",
    alignItems:"flex-start",
    flexWrap: "wrap",
  },
  buttonCancel: {
    backgroundColor: "green",
  },
});
