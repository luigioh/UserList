import React from "react";
import { Text, View, StyleSheet, FlatList,  } from "react-native";
import {Avatar} from "react-native-elements"

export default class UserPosts extends React.Component {
  state = {
    isLoading: true,
    prevState: [],
    state1:[this.props.navigation.state.params.dataSource1],
    state2:[this.props.navigation.state.params.dataSource2]
  }
  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          prevState: responseJson.filter(x => x.userId == [this.props.navigation.state.params.dataSource2]),
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <Text style={styles.user}>{this.props.navigation.state.params.dataSource1}</Text>
        <Avatar
        rounded
        icon={{name: 'user', type: 'font-awesome'}}
        onPress= {() => this.props.navigation.navigate('Users',{dataSource1:this.state.state1, dataSource2:this.state.state2})}
        containerStyle={{bottom:36,left:30}}
        />
        <View
        style={{
          height: 1,
          width: 1000,
          backgroundColor: "#CED0CE",
          marginLeft:"10%"
        }}/>
        <FlatList
          style={styles.list}
          data={this.state.prevState}
          renderItem={({ item }) =>
            <View>
              <Text
              onPress= {() => this.props.navigation.navigate('Comments',{dataSource1:this.state.state1, dataSource2:this.state.state2})}
                style={styles.item}>
                POSTAGEM:{item.id} {"\n"}
                TITULO: {item.title} {"\n"}
                POST : {item.body} {"\n"}
              </Text>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  user: {
    fontSize: 33,
    marginLeft: "22%",
    marginTop: "7%",
  },
  item:{
    fontSize:20,
  }
})