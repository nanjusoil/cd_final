
import React from 'react';
import {View, Text} from 'react-native';

class SecondTabScreen extends React.Component {

  render() {
    return (
      <View>
        <Text onPress={() => {
        this.props.navigator.push({
          screen: 'example.PushedScreen', // unique ID registered with Navigation.registerScreen
          title: undefined, // navigation bar title of the pushed screen (optional)
          subtitle: undefined, // navigation bar subtitle of the pushed screen (optional)
          titleImage: require('../img/home.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
          passProps: {}, // Object that will be passed as props to the pushed screen (optional)
          animated: true, // does the push have transition animation or does it happen immediately (optional)
          animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
          backButtonTitle: undefined, // override the back button title (optional)
          backButtonHidden: false, // hide the back button altogether (optional)
          navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
          navigatorButtons: {}, // override the nav buttons for the pushed screen (optional)
          // enable peek and pop - commited screen will have `isPreview` prop set as true.
          previewView: undefined, // react ref or node id (optional)
          previewHeight: undefined, // set preview height, defaults to full height (optional)
          previewCommit: true, // commit to push preview controller to the navigation stack (optional)
          previewActions: [{ // action presses can be detected with the `PreviewActionPress` event on the commited screen.
            id: '', // action id (required)
            title: '', // action title (required)
            style: undefined, // 'selected' or 'destructive' (optional)
            actions: [], // list of sub-actions
          }],
        });
      }}>Tab Two</Text>
      </View>
    );
  }
}

export default SecondTabScreen;