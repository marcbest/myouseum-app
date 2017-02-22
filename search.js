/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  TextInput,
  View,
  Image,
  Button,
  Alert,
  TouchableHighlight,
  AppState
} from 'react-native';
import axios from 'axios';
import PushNotification from 'react-native-push-notification';
import PushController from './app/PushController';

class Search extends Component {
  constructor(props) {
  super(props);
  this.handleAppStateChange = this.handleAppStateChange.bind(this);
  this.state = { text: '' };
  }

  async onSaveTopic() {
    console.log(this.state.text)
    console.log('Button has been pressed')

    axios.get('http://10.0.2.2:3000/api/getafact/' + this.state.text)
      .then(res => {
        console.log(res.data)
        Alert.alert(res.data);
        this.pushNotification(res.data);
      })
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === 'background') {
      PushNotification.localNotificationSchedule({
        message: "test notification!",
        date: new Date(Date.now() + (5 * 1000)) // in 5 seconds
      });
      console.log('app is in background')
    }
  }

  async pushNotification(msg) {
    PushNotification.localNotificationSchedule({
      message: "test notification!",
      date: new Date(Date.now() + (5 * 1000)) // in 5 seconds
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'search'}}
          renderScene={this.renderScene.bind(this)}
        />
        <TouchableHighlight onPress={this.onSaveTopic.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
            Save
          </Text>
        </TouchableHighlight>
        <PushController/>

    </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default Search
