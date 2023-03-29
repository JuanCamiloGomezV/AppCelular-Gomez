import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

import OrderDetailItem from "../components/OrderDetailItem";
import React from "react";
import TextStyle from "../constants/TextStyle";
import { useSelector } from "react-redux";

const OrderDetailScreen = () => {
  const order = useSelector((state) => state.orders.selected);
  const formatDay = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };
  const { itemsCart } = order;
  const renderOrderDetailItem = ({ item }) => <OrderDetailItem item={item} />;
  return (
    order && (
      <View style={styles.container}>
        <View style={styles.containerProducts}>
          <FlatList
            data={itemsCart}
            keyExtractor={(item) => item.id}
            renderItem={renderOrderDetailItem}
            numColumns={1}
            ListFooterComponent={() => (
              <View style={{ padding: 20,marginBottom:120 }}>
                <Text style={[styles.text,{ fontSize: 20, fontWeight: "bold" }]}>
                  Resumen del pedido
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <Text style={[styles.text,{ fontSize: 16}] }>Fecha</Text>
                  <Text style={[styles.text,{ fontSize: 16}] }>{formatDay(order.date)}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <Text style={[styles.text,{ fontSize: 16}] }>Total</Text>
                  <Text style={[styles.text,{ fontSize: 16}] }>${order.totalCart}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    )
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    fontFamily: TextStyle.textRegular,
  }
});
