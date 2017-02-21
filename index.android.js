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
  Image
} from 'react-native';

class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
}

export default class mYOUseumApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          //style={{width: 50, height: 50}}
          //source={require('img/mueseum.png')}
        />
        <Text style={styles.welcome}>
          mYOUseum
        </Text>
        <Text style={styles.instructions}>
          Insert item code:
        </Text>
        <TextInput
          style={{height: 40, width: 250,  borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
        />
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
AppRegistry.registerComponent('mYOUseumApp', () => mYOUseumApp);
