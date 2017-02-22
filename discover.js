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
  ListView,
  TextInput,
  View,
  Image,
  Button,
  Alert,
  TouchableHighlight
} from 'react-native';
import axios from 'axios';

class Discover extends Component {
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
      <TextInput
        style={{marginTop:20, height: 30, width:280, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />

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

export default Discover
