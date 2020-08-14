import { StyleSheet } from "react-native";
import globalStyles from "../../assets/styles/global";
import { Archivo_400Regular } from "@expo-google-fonts/archivo";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.colorprimary,
    justifyContent: "center",
    padding: 40,
  },
  banner: {
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Archivo_400Regular",
    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontWeight: "bold",
  },
});
