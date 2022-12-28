import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import BackButton from "../../components/BackButton";
import Background from "../../components/Background/background";
import { Link, useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { useContext } from "react";
import ToastManager, { Toast } from "toastify-react-native";
import { MyContextUser } from "../../ContextUser/UserContext";
const SecondPage = () => {
  const { nome, setNome } = useContext(MyContextUser);
  const navigation = useNavigation();

  return (
    <Background>
      <BackButton  />
      <View style={styles.container}>
        <ToastManager />
        <Text style={styles.title}> QUEM SOU?</Text>
        <TextInput
          style={styles.textInput}
          placeholder="SEU NOME..."
          placeholderTextColor={"#fff"}
          value={nome}
          onChangeText={(text) => {
            setNome(text);
          }}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (nome === "") {
                Toast.error("Digite um Nome!!", "center");
                return;
              }
              navigation.navigate("HomeTabs");
            }}
          >
            <Text style={styles.textButton}>Continuar...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default SecondPage;
