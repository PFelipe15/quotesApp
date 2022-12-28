import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },

  title: {
    marginTop: 50,
    fontSize: 55,
    color: "#615C5C",
    fontWeight: "bold",
  },

  textInput: {
    marginTop: 40,
    width: 340,
    height: 30,
    color: "#fff",
    backgroundColor: "#615C5C",
    borderRadius: 15,
    textAlign: "center",
  },

  buttonContainer: {
    marginTop: 25,
    width: "100%",
    height: 45,
    alignItems: "flex-end",
  },
  button: {
    marginRight: 25,
    width: 100,
    height: 30,
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
