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

import Search from './search';
import Profile from './profile';
import Subscriptions from './subscriptions';
import Discover from './discover';

export default class mYOUseumApp extends Component {
  renderScene(route, navigator) {
    console.log(route);
    if(route.name == 'search') {
      return <Search navigator={navigator} />
    }
    if(route.name == 'profile') {
      return <Profile navigator={navigator} />
    }
    if(route.name == 'subscriptions') {
      return <Subscriptions navigator={navigator} />
    }
    if(route.name == 'discover') {
      return <Discover navigator={navigator} {...route.passProps} />
    }
  }

  render() {
     return (
       <View style={styles.container}>
         <Navigator
           initialRoute={{name: 'search'}}
           renderScene={this.renderScene.bind(this)}
         />
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

AppRegistry.registerComponent('mYOUseumApp', () => mYOUseumApp);
