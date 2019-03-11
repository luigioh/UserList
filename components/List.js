import React from 'react';
import { FlatList, List, ListView, ListItem, ActivityIndicator, Text, View, StyleSheet, Button } from 'react-native';
import ChangePageButton from "./ChangeList";

export default class FetchExample extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/users')
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

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  render() {

    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      )
    }

    return ( 
      <View>
        <Text style={{fontSize:20, textAlign:"center",top:80}}>Lista de Usuários</Text>
        <FlatList
          style={styles.list}
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <Text
              style={styles.item}>
              {item.name}{"\n"}
              <ChangePageButton/>
            </Text>
          }
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  item: {
    textAlign: "left",
    fontSize: 15,
    padding: 16,
    fontWeight: 'bold',
    flex: 1,
    flexDirection: "row"
  },
  list: {
    top: 130
  }
})