import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";
import TextStyles from "../constants/TextStyles";

const Button = ({
    styleButtonType,
    styleTextButton,
    colorText,
    color,
    onPress,
    title,
    ...otherProps
}) => {
  return (
    <Pressable
      style={[styles.button, styleButtonType,{backgroundColor:color}]}
      onPress={onPress} {...otherProps}
    >
      <Text style={{...styleTextButton,color:colorText,fontFamily: TextStyles.regular,}}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        padding: 10,
        justifyContent:"center",
        alignItems: "center",
      },
});