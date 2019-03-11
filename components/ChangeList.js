import React from "react";
import { View, Text, Button } from "react-native";
import { withRouter } from "react-router-native";

const ChangePageButton = ({ history }) => (
  <Text
    title="Vizualizar o Posts"
    onPress={() =>
      history.push("/Users")
    }
  />
);

export default withRouter(ChangePageButton);