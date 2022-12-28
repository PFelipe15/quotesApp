import React from "react";
import { Text, View } from "react-native";
import BackButton from "../../components/BackButton";
import Background from "../../components/Background/background";
import ToHome from "../../components/ToHome";
import { styles } from "./styles";

const CreateQuotePage = () => {
  return (
    <Background>
      <ToHome />
      <View style={styles.container}>
        <Text style={styles.title}>CRIAR CITAÇÃO</Text>
      </View>
    </Background>
  );
};

export default CreateQuotePage;
