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
  redirect(routeName, accessToken){
    this.props.navigator.push({
      name: routeName
    });
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
        <PushController/>
        <Text style={{color: 'blue'}}
          onPress={() => this.redirect('profile')}>
          Profile
        </Text>
        <Text style={{color: 'blue'}}
          onPress={() => this.redirect('discover')}>
          Discover
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
export default Search
