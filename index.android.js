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
  Alert
} from 'react-native';
import axios from 'axios';


const onButtonPress = () => {
  //Alert.alert('Button has been pressed!');
  console.log('Button has been pressed')

  // fetch('http://10.0.2.2:3000/api/getafact/A631886', {
  //   method: 'GET',
  // });

  // axios.get('http://127.0.0.1:3000/api/getafact/')

  axios.get('http://10.0.2.2:3000/api/getafact/syrup jar')
    .then(res => {
      console.log(res.data)
      Alert.alert(res.data);
    })
};

exports.displayName = 'ButtonExample';
exports.framework = 'React';
exports.title = '<Button>';
exports.description = 'Simple React Native button component.';

class UselessTextInput extends Component {
  constructor(props) {
    console.log('test')
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
}

export default class mYOUseumApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://s23.postimg.org/lm2k4lsmz/879678_200.png'}}
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

        <Button
          onPress={onButtonPress}
          title="Press Me"
          accessibilityLabel="See an informative alert"
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
