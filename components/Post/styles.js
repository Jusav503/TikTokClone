import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
  },
  video: { width: "100%", height: Dimensions.get("window").height },
  play: { position: "absolute" },
});

export default styles;
