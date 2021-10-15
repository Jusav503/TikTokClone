import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { Video } from "expo-av"; 
import { Ionicons, AntDesign, FontAwesome, Fontisto } from "@expo/vector-icons";
import styles from "./styles";

const Post = () => {
  const [status, setStatus] = useState({});
  const video = React.useRef(null);

  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => status.isPlaying 
          ? video.current.pauseAsync() : video.current.playAsync()}>
          <Video
            style={styles.video}
            source={{
              uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
            }}
            shouldPlay
            resizeMode="cover"
            isLooping
            ref={video}
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </TouchableWithoutFeedback>

        <View style={styles.uiContainer}>
          <View style={styles.feedbackContainer}>
            <Image style={styles.profilePicture} source={{uri:"https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg"}} />
            <AntDesign name="heart" size={35} color="white" />
            <Text style={{color: "white"}}>21.4k</Text>
            <View style={{marginVertical: 25, alignItems: "center"}}>
              <FontAwesome name="commenting" size={37} color="white" />
              <Text style={{color: "white"}}>864</Text>
            </View>
            <Fontisto name="share-a" size={30} color="white" />
            <Text style={{color: "white"}}>53k</Text>
          </View>

          <View style={styles.bottomInfo}>
            <View style={styles.infoContainer}>
              <Text style={styles.username}>@pepo_28</Text>
              <Text style={styles.description}>
                lorem ipsumawsfg asgsdgs dfgh drh ipsu mawsf gasg sdg sdfgh drh
                ipsu ma wsfgas gsdgs dfgh drh
              </Text>
              <View style={styles.musicContainer}>
                <Ionicons name="musical-notes" style={{ margin: 8 }} size={18} color="white"/>
                <Text style={{ color: "white", fontSize: 11 }}>Post Malone - Motley Crew</Text>
              </View>
            </View>
            <Image style={styles.musicDisc} source={{uri:"https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg"}} />
          </View>
        </View>
    </View>
  );
  
};

export default Post;
