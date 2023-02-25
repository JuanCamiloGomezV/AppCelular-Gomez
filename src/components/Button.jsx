import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";

const Button = ({
    styleButtonType,
    styleTextButton,
    onPress,
    title
}) => {
  return (
    <Pressable
      style={[styles.button, styleButtonType]}
      onPress={onPress}
    >
      <Text style={styleTextButton}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        padding: 10,
      },
});