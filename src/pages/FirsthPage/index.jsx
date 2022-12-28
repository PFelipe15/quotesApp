import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Background from "../../components/Background/background";

import { styles } from "./styles";

const FirsthPage = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>BEM VINDO</Text>
        <Text style={styles.infoTitle}>
          CRIE CITAÇÕES E FRASES QUE VENHAM DE SUA INSPIRAÇÃO!
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("SecondPage");
            }}
          >
            <Text style={styles.textButton}>VAMOS COMEÇAR?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default FirsthPage;
