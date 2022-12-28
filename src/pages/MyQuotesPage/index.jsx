import React from "react";
import { View, Text, ScrollView } from "react-native";
import Background from "../../components/Background/background";
import HomeMyQuotes from "../../components/HomeMyQuotes";

import { styles } from "./styles";

const MyQuotesPage = () => {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>SUAS CITAÇÕES</Text>
        <ScrollView>
          <HomeMyQuotes />
          <HomeMyQuotes />
          <HomeMyQuotes />
          <HomeMyQuotes />
          <HomeMyQuotes />
          <HomeMyQuotes />
        </ScrollView>
      </View>
    </Background>
  );
};

export default MyQuotesPage;
