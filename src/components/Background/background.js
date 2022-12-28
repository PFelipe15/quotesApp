import React from "react";
import { View, StyleSheet, ImageBackground, Text, StatusBar } from "react-native";

const Background = ({ children }) => {
  const image = {
    uri: "https://images.unsplash.com/photo-1608099269227-82de5da1e4a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
  };
  return (
    <ImageBackground source={image} style={{ flex: 1 }}>
       <StatusBar /> 
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Background: {
    backgroundColor: "#615C5C",
    width: "100%",
    height: "100%",
  },
});

export default Background;
