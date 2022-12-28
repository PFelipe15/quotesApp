import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxCitacao: {
    display: "flex",
    marginTop: 40,
    width: 385,
    height: 200,
    backgroundColor: "#615C5C",
    borderRadius: 12,
    justifyContent: "center",
    position: "relative",
  },

  textCitacao: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    padding: 5,
  },

  estadoscontainer: {
    display: "flex",
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255,0.5)",
  },

  estados: {
    fontSize: 13,
  },
  textAutorContainer: {
    display: "flex",
    width: "100%",

    marginTop: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingEnd: 20,
  },

  textAutor: {
    fontSize: 15,
    justifyContent: "center",
  },

  icon: {
    left: 10,
    bottom: 15,
    position: "absolute",
  },
});

export { styles };
