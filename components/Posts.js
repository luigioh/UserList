import React from "react";
import { Text, View, StyleSheet, FlatList,  } from "react-native";

export default class UserPosts extends React.Component {
  state = {
    isLoading: true,
    prevState: []
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
        <FlatList
          style={styles.list}
          data={this.state.prevState}
          renderItem={({ item }) =>
            <View>
              <Text
                style={styles.item}>
                Titulo :{item.id} {item.title} {"\n"}
                Post : {item.body} {"\n"}
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
    fontSize: 30,
    marginLeft: "6%",
    marginTop: "2%",
  }
})