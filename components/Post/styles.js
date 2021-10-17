import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 15,
  },
  uiContainer: { height: "100%", justifyContent: "flex-end", padding: 10 },
  feedbackContainer: {
    alignSelf: "flex-end",
    alignItems: "center",
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 30,
  },
  bottomInfo: { flexDirection: "row", justifyContent: "space-between" },
  infoContainer: { width: 230 },
  username: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 5,
  },
  description: {
    color: "#fff",
    letterSpacing: 0.2,
    fontSize: 13,
  },
  musicContainer: { flexDirection: "row", alignItems: "center", overflow: "hidden" },
  musicDisc: {
    width: 55,
    height: 55,
    borderRadius: 30,
    borderWidth: 10,
    borderColor: "#17202A",
    alignSelf: "flex-end",
    aspectRatio: 1,
  },
});

export default styles;
