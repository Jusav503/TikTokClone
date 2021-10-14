import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Video } from "expo-av";

import styles from "./styles";

const Post = () => {
  const [status, setStatus] = useState({});
  const video = React.useRef(null);

  return (
    <TouchableWithoutFeedback onPress={() =>
        status.isPlaying
          ? video.current.pauseAsync()
          : video.current.playAsync()
      }
    >
      <View style={styles.container}>
        <Video
          style={styles.video}
          source={{
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
          }}
          resizeMode="cover"
          shouldPlay
          isLooping
          ref={video}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        {/* <FontAwesome5 style={styles.play} size={50} name="play" color='white' /> */}
        
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Post;
