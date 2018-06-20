import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  TabNavigator,
} from 'react-navigation';

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <View>
        <Text>Page_1</Text>
      </View>
    );
  }
}

class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <View>
        <Text>Page_2</Text>
      </View>
    );
  }
}

const App = TabNavigator({
  Page1: { screen: Page1, navigationOptions:{tabBarLabel: '第一頁'}},
  Page2: { screen: Page2, navigationOptions:{tabBarLabel: '第二頁'}},
  },{
  tabBarOptions: {
    activeTintColor: 'blue',
    labelStyle: {
      fontSize: 14,
    },
  },
});

export default App;