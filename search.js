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
  // this.state = { text: '' };
  this.state = { text: '', nextPush: '' };
  }
  redirect(routeName, accessToken){
    this.props.navigator.push({
      name: routeName
    });
  }

  async onSaveTopic() {
    console.log(this.state.text)
    console.log('Button has been pressed')

    // axios.get('http://10.0.2.2:3000/api/getafact/' + this.state.text)
    axios.get('http://b34e5e32.ngrok.io/api/getafact/' + this.state.text)
      .then(res => {
        console.log(res.data)
        // Alert.alert(res.data);
        // this.pushNotification(res.data);
        this.state.nextPush = res.data;
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
        // message: "test notification!",
        message: this.state.nextPush,
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
				<View style={styles.header}>
					<Text style={styles.welcome}>
						Myseum
					</Text>
				</View>
        <Text style={styles.instructions}>
          Insert item code:
        </Text>
        <TextInput
          style={{height: 45, width:280, borderColor: 'black', borderWidth: 3, backgroundColor: 'white', marginBottom: 15}}
          onChangeText={(text) => this.setState({text})}
          underlineColorAndroid="white"
          value={this.state.text}
        />
        <Button
					onPress={this.onSaveTopic.bind(this)}
					title="   Save   "
					color="#7500FF"
					accessibilityLabel="Learn more about this purple button"
				/>
				
        <PushController/>
        <Text style={{color: 'blue'}}
          onPress={() => this.redirect('profile')}>
          Profile
        </Text>
        <Text style={{color: 'blue'}}
          onPress={() => this.redirect('discover')}>
          Discover
        </Text>
        <Text style={{color: 'blue'}}
          onPress={() => this.redirect('subscriptions')}>
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
    backgroundColor: '#F9F9F9',
  },
  header: {
    // flex: 1,
    //justifyContent: 'center',
		// flexDirection: 'row',
		width: 400,
    alignItems: 'center',
    backgroundColor: '#F8FF00',
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#000000'
  },
  instructions: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 15,
    fontSize: 25,
    marginTop: 50
  },
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
    fontSize: 25,
    marginTop: 50
  },
});
export default Search
