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

class Profile extends Component {
  constructor(props) {
  super(props);
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
      })
}
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 100, height: 100, borderRadius: 50, marginTop: 30}}
          source={{uri: 'http://cdn.patch.com/assets/contrib/images/placeholder-user-photo.png'}}
        />
        <Text style={styles.header}>
          Personal bio:
        </Text>
        <Text style={styles.bio}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
        </Text>
        <Text style={styles.header}>
          Categories Im interested in:
        </Text>

        <Text style={{color: 'blue'}}
          onPress={() => this.redirect('search')}>
          Search
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
  header: {
    fontSize: 12,
    marginTop: 20,
    textAlign: 'center',
    color: '#F5FCFF',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  bio: {
    fontSize: 12,
    textAlign: 'center',
    marginHorizontal: 10,
    color: '#F5FCFF',
    textAlign: 'left',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});

export default Profile
