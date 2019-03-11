import React from 'react';
import { FlatList, List, ListView, ListItem, TouchableOpacity, ActivityIndicator, Text, View, StyleSheet, Button } from 'react-native';

export default class FetchExample extends React.Component {
  state = {
    isLoading: true
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
          width: 1000,
          backgroundColor: "#CED0CE",
          marginLeft:"10%"
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
        <Text style={{ fontSize: 20, textAlign: "center", top: 10 }}>Lista de Usuários</Text>
        <FlatList
          style={styles.list}
          data={this.state.dataSource}
          renderItem={({ item }) =>
          <View>
            <Text
            style = {styles.item}
            onPress= {() => this.props.navigation.navigate('Users')}>
              {item.name}
            </Text>
            <Text
            style = {styles.posts}
            onPress= {() => this.props.navigation.navigate('Posts',{dataSource1:item.name, dataSource2:item.id})}>
              Vizualizar Posts
            </Text>
          </View>
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
    padding: 16,
    fontSize:20,
    fontWeight: 'bold',
  },
  posts:{
    fontSize:16,
  },
  list: {
    top: 30
  }
})