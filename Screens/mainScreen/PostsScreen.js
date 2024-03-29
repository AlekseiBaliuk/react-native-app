import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultPostsScreen from "../postedScreens/DefaultPostsScreen";
import CommentsScreen from "../postedScreens/CommentsScreen";
import MapScreen from "../postedScreens/MapScreen";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { authSignOut } from "../../redux/auth/authOperations";

const PostedScreen = createStackNavigator();

const PostsScreen = () => {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(authSignOut());
  };
  return (
    <PostedScreen.Navigator>
      <PostedScreen.Screen
        name="DefaultScreen"
        component={DefaultPostsScreen}
        options={{
          title: "Публикации",
          headerTitleAlign: "center",

          headerRight: () => (
            <TouchableOpacity style={styles.logOutBtn} onPress={signOut}>
              <Image source={require("../../assets/img/logOut.png")} />
            </TouchableOpacity>
          ),

          headerLeft: () => null,
        }}
      />
      <PostedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: "Комментарии",
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
        }}
      />
      <PostedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Карта",
          headerBackTitleVisible: false,
          headerTitleAlign: "center",
        }}
      />
    </PostedScreen.Navigator>
  );
};

const styles = StyleSheet.create({
  logOutBtn: {
    marginRight: 19,
  },
});

export default PostsScreen;
