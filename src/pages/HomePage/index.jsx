import React, { useContext } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Background from "../../components/Background/background";
import HomeMyQuotes from "../../components/HomeMyQuotes";
import { MyContextUser } from "../../ContextUser/UserContext";
import { styles } from "./styles";

const HomePage = () => {
  const { nome } = useContext(MyContextUser);

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>COMO ESTOU HOJE?</Text>
        <ScrollView>
          <HomeMyQuotes />
          <HomeMyQuotes /> 
        </ScrollView>
      </View>
    </Background>
  );
};

export default HomePage;
