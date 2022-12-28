import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";

const HomeMyQuotes = () => {
  return (
    <View style={styles.boxCitacao}>
      <Text style={styles.textCitacao} numberOfLines={5}>
        Do do culpa commodo reprehenderit adipisicing,Ipsum ullamco aute Velit
        cillum veniam nulla duis officia est do laborum ullamco anim laborum.Ex
        enim sunt duis cillum consequat excepteur proident ullamco veniam
        aliqua.
      </Text>
      <View style={styles.estadoscontainer}>
        <Text style={styles.estados}>FELICIDADE + AMOR + SAUDADE</Text>
      </View>

      <TouchableOpacity style={styles.icon}>
        <MaterialCommunityIcons name="delete" size={35} color="#fff" />
      </TouchableOpacity>
      <View style={styles.textAutorContainer}>
        <Text style={styles.textAutor}>PAULO FELIPE</Text>
      </View>
    </View>
  );
};

export default HomeMyQuotes;
