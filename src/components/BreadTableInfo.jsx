import { StyleSheet, Text, View } from "react-native";

import React from "react";

const BreadTableInfo = ({bread}) => {
  const {type_pet,age,size,specialties,ingredients}=bread
  return (
    <View style={styles.table}>
      {type_pet && (
        <View style={styles.row}>
          <Text style={styles.cellColumnOne}>Tipo de Mascota</Text>
          <Text style={styles.cellColumnTwo}>{bread.type_pet}</Text>
        </View>
      )}
      {age && <View style={styles.row}>
        <Text style={styles.cellColumnOne}>Edad</Text>
        <Text style={styles.cellColumnTwo}>{age}</Text>
      </View>}
      {size&&<View style={styles.row}>
        <Text style={styles.cellColumnOne}>Tamaño</Text>
        <Text style={styles.cellColumnTwo}>{size}</Text>
      </View>}
      {specialties && <View style={styles.row}>
        <Text style={styles.cellColumnOne}>Especialidades</Text>
        <Text style={styles.cellColumnTwo}>{specialties}</Text>
      </View>}
      {ingredients&&<View style={styles.row}>
        <Text style={styles.cellColumnOne}>Ingredientes</Text>
        <Text style={styles.cellColumnTwo}>{ingredients}</Text>
      </View>}
    </View>
  );
};

export default BreadTableInfo;

const styles = StyleSheet.create({
  table: {
    padding: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cellColumnOne: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#B0B0B0",
    backgroundColor: "#E0E0E0",
    padding: 10,
  },
  cellColumnTwo: {
    flex: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#B0B0B0",
    padding: 10,
  },
});
