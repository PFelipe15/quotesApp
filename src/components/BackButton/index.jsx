import React from "react";
import { TouchableOpacity,View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}> 
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={styles.button}
    >
      <Icon name="arrow-back" size={55} color="#615C5C" />
    </TouchableOpacity>

    </View>
  );
};

export default BackButton;
