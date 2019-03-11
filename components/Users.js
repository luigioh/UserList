import React from 'react';
import {View , Text, StyleSheet , FlatList, Button} from "react-native"

export default class UserProfile extends React.Component {
  state = {
    isLoading: true,
  }
  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          prevState: responseJson.filter(x => x.id == [this.props.navigation.state.params.dataSource2]),
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
                ID :{item.id} {"\n"}
                EMAIL : {item.email} {"\n"}
                USERNAME : {item.username} {"\n"}
                ADDRESS : 
                {"\n"}  -Stree: {item.address.street}
                {"\n"}  -Suite: {item.address.suite}
                {"\n"}  -City: {item.address.city}
                {"\n"}  -Zipcode: {item.address.zipcode}
              </Text>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  user: {
    fontSize: 33,
    marginLeft: "6%",
    marginTop: "10%",
  },
  item:{
    marginLeft:"5%",
    marginTop: "4%",
    fontSize:17
  }
})