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

class mYOUseumApp extends Component {
  constructor(props) {
  super(props);
  this.state = { text: '' };
  }
  async onSaveTopic() {
    console.log(this.state.text)
}
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
          style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableHighlight onPress={this.onSaveTopic.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
            Save
          </Text>
        </TouchableHighlight>

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
