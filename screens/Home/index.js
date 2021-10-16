import React from "react";
import { View } from "react-native";
import Post from "../../components/Post";

const post1 = {
  id: "p1",
  videoUri:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  user: {
    id: "u1",
    username: "daviddobrik",
    imageUri:
      "https://i.scdn.co/image/ab67706c0000bebbd7ec3f012f1fd1e4437d5bc8",
  },
  description: "hahahah oh boy @borat",
  songName: "NF - The search",
  songImage:
    "https://i.scdn.co/image/ab67706c0000bebbd7ec3f012f1fd1e4437d5bc8",
  likes: 123,
  comments: 12,
  shares: 44,
};

const Home = () => {
  return (
    <View>
      <Post post={post1} />
    </View>
  );
};

export default Home;
