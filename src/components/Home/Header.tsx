import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../../assets/header_logo.svg")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});
