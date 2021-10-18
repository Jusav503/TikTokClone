import React, { useEffect, useState } from "react";
import {View,Text,TouchableWithoutFeedback,Image,TouchableOpacity, Animated, Easing, Dimensions } from "react-native";
import { Video } from "expo-av";
import { Ionicons, AntDesign, FontAwesome, Fontisto, MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

const Post = (props) => {
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);
  const [isPaused, togglePlayPause] = useState(false);

  const video = React.useRef(null);
  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;
  
  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  const animateValue = new Animated.Value(0);
  const rotate = animateValue.interpolate({inputRange:[0,1], outputRange:['0deg', '360deg']});
  const translateX = animateValue.interpolate({inputRange:[0,1], outputRange:[WIDTH, -WIDTH]});
  useEffect(() => {
    Animated.loop(
      Animated.timing(
        animateValue,{
          toValue: 1,
          duration: 6000,
          easing: Easing.linear,
          useNativeDriver: true
        }        
      )  
    ).start()
  })

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => togglePlayPause(!isPaused) }>
        <Video
          ref={video}
          source={{ uri: post.videoUri }}
          shouldPlay={isPaused}
          resizeMode="cover"
          isLooping
          style={styles.video}
        />
      </TouchableWithoutFeedback>

      <View style={styles.uiContainer}>
        <View style={styles.feedbackContainer}>
          <View style={{alignItems: 'center', paddingRight: 3}}>
            <Image style={styles.profilePicture} source={{ uri: post.user.imageUri }}/>
            <TouchableOpacity
              style={{ 
                height:20,
                borderRadius:10,
                backgroundColor: "#ee1d52",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                bottom: 20
              }}
            >
              <MaterialIcons name="add" color="white" size={17} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onLikePress} style={{ alignItems: "center" }}>
            <AntDesign name="heart" size={35} color={isLiked ? "red" : "white"}/>
            <Text style={{ color: "white" }}>{post.likes}</Text>
          </TouchableOpacity>

          <View style={{ marginVertical: 25, alignItems: "center" }}>
            <FontAwesome name="commenting" size={35} color="white" />
            <Text style={{ color: "white" }}>{post.comments}</Text>
          </View>

          <Fontisto name="share-a" size={25} color="white" />
          <Text style={{ color: "white" }}>{post.shares}</Text>
        </View>

        <View style={styles.bottomInfo}>
          <View style={styles.infoContainer}>
            <Text style={styles.username}>@{post.user.username}</Text>
            <Text style={styles.description}>{post.description}</Text>
            <View style={styles.musicContainer} >
              <Animated.Text numberOfLines={1} 
                style={{ 
                  color: "white", 
                  fontSize: 11,
                  transform: [{translateX}]
                }}
              >
                <Ionicons
                  name="musical-notes"
                  style={{margin: 8}}
                  size={18}
                  color="white"
                />
                {post.songName}
              </Animated.Text>
            </View>
          </View>
          <Animated.View style={{
              height: 55,
              justifyContent: "center",
              alignItems: "center",
              transform: [{rotate}] 
            }} 
          >
            <Image style={styles.musicDisc} source={{ uri: post.songImage }} />
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Post;
