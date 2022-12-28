import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },

  title: {
    marginTop: 50,
    fontSize: 40,
    color: "#615C5C",
    fontWeight: "bold",
  },

  boxCitacao: {
    display: "flex",
    position: "relative",
    marginTop: 80,
    width: 385,
    height: 200,
    backgroundColor: "#615C5C",
    borderRadius: 12,
    justifyContent: "center",
  },

  textCitacao: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },

  textAutorContainer: {
    width: "100%",
    display: "flex",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingEnd: 20,
  },

  textAutor: {
    justifyContent: "center",
  },

 
});

export { styles };
