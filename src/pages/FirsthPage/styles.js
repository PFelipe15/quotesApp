import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },

  welcomeTitle: {
    marginTop: 80,
    fontSize: 55,
    color: "#615C5C",
    fontWeight: "bold",
  },

  infoTitle: {
    marginTop: 30,
    fontSize: 25,
    color: "#615C5C",
    textAlign: "center",
  },

  buttonContainer: {
    marginTop: 35,
    width: "100%",
    height: 45,
    alignItems: "flex-end",
  },
  button: {
    marginRight: 25,
    width: 175,
    height: 40,
    backgroundColor: "#615C5C",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  textButton: {
    color: "#fff",
  },
});

export { styles };
