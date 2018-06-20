
import React from 'react';
import {View, Text} from 'react-native';

class SecondTabScreen extends React.Component {

  render() {
    return (
      <View>
        <Text onPress={() => {
        this.props.navigator.push({
          screen: 'example.PushedScreen', // unique ID registered with Navigation.registerScreen
          titleImage: require('../img/home.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
          passProps: {}, // Object that will be passed as props to the pushed screen (optional)
          animated: true, // does the push have transition animation or does it happen immediately (optional)
          animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
          backButtonTitle: undefined, // override the back button title (optional)
          backButtonHidden: false, // hide the back button altogether (optional)
          previewCommit: true, // commit to push preview controller to the navigation stack (optional)
        });
      }}>Tab Two</Text>
      </View>
    );
  }
}

export default SecondTabScreen;