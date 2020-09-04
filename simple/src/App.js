/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={{height:50}}>
          <TouchableHighlight
            onPress={() => {
              console.log("123123");
            }}
          >
            <Text>Log Something</Text>
          </TouchableHighlight>
        </View>
        <View style={{height:50}}>
          <TouchableHighlight
            onPress={() => {
              fetch("https://api.github.com/users/octocat/orgs")
              .then(res => console.log(res))
            }}
          >
            <Text>fetch</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default App;
