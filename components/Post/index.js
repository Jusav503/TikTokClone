import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import { Ionicons, AntDesign, FontAwesome, Fontisto } from "@expo/vector-icons";
import styles from "./styles";

const Post = (props) => {
  
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);
  const [status, setStatus] = useState({});
  const video = React.useRef(null);

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() =>
          status.isPlaying
            ? video.current.pauseAsync()
            : video.current.playAsync()
        }
      >
        <Video
          style={styles.video}
          source={{uri: post.videoUri}}
          shouldPlay
          resizeMode="cover"
          isLooping
          ref={video}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </TouchableWithoutFeedback>

      <View style={styles.uiContainer}>
        <View style={styles.feedbackContainer}>
          <Image
            style={styles.profilePicture}
            source={{uri: post.user.imageUri}}
          />
          <TouchableOpacity onPress={onLikePress} style={{alignItems: "center"}}>
            <AntDesign name="heart" size={35} color={isLiked ? "red" : "white"} />
            <Text style={{ color: "white" }}>{post.likes}</Text>
          </TouchableOpacity>

          <View style={{ marginVertical: 25, alignItems: "center" }}>
            <FontAwesome name="commenting" size={37} color="white" />
            <Text style={{ color: "white" }}>{post.comments}</Text>
          </View>

          <Fontisto name="share-a" size={30} color="white" />
          <Text style={{ color: "white" }}>{post.shares}</Text>
        </View>

        <View style={styles.bottomInfo}>
          <View style={styles.infoContainer}>
            <Text style={styles.username}>@{post.user.username}</Text>
            <Text style={styles.description}>{post.description}</Text>
            <View style={styles.musicContainer}>
              <Ionicons
                name="musical-notes"
                style={{ margin: 8 }}
                size={18}
                color="white"
              />
              <Text style={{ color: "white", fontSize: 11 }}>{post.songName}</Text>
            </View>
          </View>
          <Image style={styles.musicDisc} source={{uri: post.songImage}}/>
        </View>
      </View>
    </View>
  );
};

export default Post;
