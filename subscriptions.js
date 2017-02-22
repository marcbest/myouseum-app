/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  Alert,
  TouchableHighlight
} from 'react-native';
import axios from 'axios';

class Subscriptions extends Component {
  constructor(props) {
  super(props);
  this.state = { text: '' };
  }
  async onAddNewItem() {
    //direct user back to search page
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Curate your own exhibition to share your findings with friends and people nearby
        </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34435E',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});

export default Subscriptions
