import React from 'react';
import FetchExample from "./components/List";
import {View , Text, StyleSheet} from "react-native"
import UserProfile from "./components/Users"
import { Switch, NativeRouter, Route } from "react-router-native"

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/Users" component={Products} />
        </Switch>
      </NativeRouter>
    );
  }
};
