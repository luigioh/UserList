import React from "react"
import {View , Text, StyleSheet} from "react-native"

export default class UserProfile extends React.Component{

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
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
    
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text:{
    textAlign:"center",
    top:400
  }
})