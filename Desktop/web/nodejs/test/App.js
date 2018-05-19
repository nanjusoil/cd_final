import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      icon: require('./img/rsz_home.png'),
      selectedIcon: require('./img/rsz_home.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('./img/rsz_home.png'),
      selectedIcon: require('./img/rsz_home.png'), // iOS only
      title: 'Screen Two'
    }
  ],drawer: { // optional, add this if you want a side menu drawer in your app
    left: { // optional, define if you want a drawer from the left
      screen: 'example.PushedScreen', // unique ID registered with Navigation.registerScreen
      passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
      fixedWidth: 500, // a fixed width you want your left drawer to have (optional)
    },
    disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
  }
});