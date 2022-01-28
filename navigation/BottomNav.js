import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Navigation = () => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.options}>
        <Entypo name={"home"} size={20} color={"white"} />
        <Text style={{ color: "white", fontSize: 12 }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.options}>
        <Feather name={"search"} size={20} color={"white"} />
        <Text style={{ color: "white", fontSize: 12 }}>Discover</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        <MaterialCommunityIcons
          name="plus-box-outline"
          size={25}
          color="white"
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.options}>
        <Ionicons name={"chatbox-ellipses-outline"} size={20} color={"white"} />
        <Text style={{ color: "white", fontSize: 12 }}>Inbox</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.options}>
        <Feather name={"user"} size={20} color={"white"} />
        <Text style={{ color: "white", fontSize: 12 }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    paddingHorizontal: 15,
    paddingBottom: 7,
    backgroundColor: "black",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  options: { alignItems: "center" },
});
