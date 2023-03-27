import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { deleteOrder, getOrders } from "../store/actions/orders.action";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../constants/Colors";
import OrderItem from "../components/OrderItem";

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  console.log(orders);
  const onDelete = (id) => {
    dispatch(deleteOrder(id));
  };

  const renderOrderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onDelete} />
  );
  return orders ? (
    <View style={styles.container}>
      <View style={styles.containerOrders}>
        <FlatList
          data={orders}
          renderItem={renderOrderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{ height: 1, width: "100%", backgroundColor: "#cccccc" }}
            ></View>
          )}
        />
      </View>
    </View>
  ) : (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 20,
    paddingHorizontal: 40,
    backgroundColor: "white",
  },
  containerOrders: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
