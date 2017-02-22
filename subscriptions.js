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
  async onSaveTopic() {
    console.log(this.state.text)
    console.log('Button has been pressed')

    // fetch('http://10.0.2.2:3000/api/getafact/A631886', {
    //   method: 'GET',
    // });

    // axios.get('http://127.0.0.1:3000/api/getafact/')

    axios.get('http://10.0.2.2:3000/api/getafact/' + this.state.text)
      .then(res => {
        console.log(res.data)
        Alert.alert(res.data);
      })
}
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://s23.postimg.org/lm2k4lsmz/879678_200.png'}}
        />
        <Text style={styles.welcome}>
          Subscriptions
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
