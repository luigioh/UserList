import React from "react";
import { Text, View, StyleSheet, FlatList,  } from "react-native";

export default class UserPosts extends React.Component {
  state = {
    isLoading: true,
    prevState: [],
    state1:[this.props.navigation.state.params.dataSource1],
    state2:[this.props.navigation.state.params.dataSource2]
  }
  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          prevState: responseJson.filter(x => x.postId == [this.props.navigation.state.params.dataSource2]),
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
        <Text style={styles.user}>COMENTÁRIOS</Text>
        <FlatList
          style={styles.list}
          data={this.state.prevState}
          renderItem={({ item }) =>
            <View>
              <Text
                style={styles.item}>
                Titulo : {item.name} {"\n"}
                Email : {item.email} {"\n"}
                Comment : {"\n"}{item.body} {"\n"}
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
    marginTop: "2%",
    textAlign:"center"
  },
  list: {
      top:10
  },
  item:{
    fontSize:20,
  }
})