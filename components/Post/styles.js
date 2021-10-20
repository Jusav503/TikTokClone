import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"black",
  },
  video: {
    width: WIDTH,
    height: Dimensions.get("window").height-50,
    borderRadius: 15,
    position: "absolute",
  },
  uiContainer: { 
    width: WIDTH, 
    height: Dimensions.get("window").height,
    justifyContent: "flex-end",
    paddingBottom:60
  },
  feedbackContainer: {
    alignSelf: "flex-end",
    alignItems: "center",
    paddingBottom:20
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "white",
  },
  bottomInfo: { flexDirection: "row", justifyContent: "space-around",},
  infoContainer: { width: 230, },
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
  musicContainer: { flexDirection: "row", alignItems: "center", overflow: "hidden", },
  musicDisc: {
    width: 55,
    height: 55,
    borderRadius: 30,
    borderWidth: 10,
    borderColor: "#17202A",
    alignSelf: "flex-end",
  },
});

export default styles;
