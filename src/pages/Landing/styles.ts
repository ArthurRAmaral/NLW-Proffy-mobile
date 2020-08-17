import { StyleSheet } from "react-native";
import globalStyles from "../../assets/styles/global";
import { useFonts, Archivo_400Regular } from "@expo-google-fonts/archivo";

export default () => {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
  });
  let font = fontsLoaded ? "Archivo_400Regular" : "";

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: globalStyles.colors.colorprimary,
      justifyContent: "space-around",
      padding: 40,
    },
    banner: {
      width: "100%",
      resizeMode: "contain",
      marginTop: 100,
    },
    title: {
      fontFamily: font,
      color: "#fff",
      fontSize: 20,
      lineHeight: 30,
      marginTop: 80,
    },
    titleBold: {
      fontWeight: "bold",
    },
    buttonContainer: {
      flex: 1,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-around",
      marginVertical: 40,
    },
    buttonsLanding: {
      width: 130,
      height: 150,
      borderRadius: 7,
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      paddingVertical: 30,
    },
    buttonStudy: {
      backgroundColor: globalStyles.colors.colorprimarylighter,
    },
    buttonGiveClasses: {
      backgroundColor: globalStyles.colors.colorsecundary,
    },
    buttonText: {
      color: "#fff",
      fontFamily: font,
      fontWeight: "700",
    },
    connections: {
      fontFamily: font,
      color: "#fff",
    },
  });
};
