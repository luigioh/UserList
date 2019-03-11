import React from "react";
import { Text,View,StyleSheet } from "react-native";

export default class UserPosts extends React.Component{
  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }
  render(){
    return(
      <View>
        <Text>{this.props.navigation.state.params.dataSource}</Text>
      </View>
    )
  }
}

