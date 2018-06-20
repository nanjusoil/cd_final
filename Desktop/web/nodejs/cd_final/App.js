/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ActivityIndicator
} from 'react-native';
var ImagePicker = require('react-native-image-picker');


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

type Props = {};
export default class App extends Component<Props> {
  constructor(){
    super();
    this.state= {
      avatarSource: '',
      score: '',
      isLoading: false
    }
  }

  componentDidMount(){
  }

  handleLoadAlbum(){
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
    
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        
        this.setState({
          isLoading: true
        })
        setTimeout( () => {
          this.setState({
            avatarSource: source,
            score: '2',
            isLoading: false
          });
        }, 30000);
      }
    });    
  }

  handleLoadRasp(){
    this.setState({
      avatarSource: 'https://i.imgur.com/k25lnZ3.jpg',
      score: '2'
    });
  }

  render() {
    if (this.state.isLoading) {
      indicator = <ActivityIndicator size="large" color="#0000ff" />;
    } else {
      indicator = <View></View>;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Score: {this.state.score}
        </Text>
        {indicator}
        <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
        <Button title="press to load from phone" onPress={() => this.handleLoadAlbum()}/>
        <Button title="press to load from Raspberry pi" onPress={() => this.handleLoadRasp()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  uploadAvatar: {
    height: 300,
    width: 300
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
