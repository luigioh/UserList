import React from 'react';
import FetchExample from "./components/List";
import UserProfile from "./components/Users";
import UserPost from "./components/Posts";
import {createStackNavigator, createAppContainer} from "react-navigation"

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
};

const AppNavigator = createStackNavigator({
  ListofUsers: {screen:FetchExample},
  Users:{screen:UserProfile},
  Posts:{screen:UserPost}
})

const AppContainer = createAppContainer(AppNavigator);