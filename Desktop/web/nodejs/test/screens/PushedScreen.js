import React from 'react';
import { StyleSheet, View, TouchableHighlight, FlatList, Image ,ActivityIndicator} from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import { ListItem } from 'react-native-elements'

export default class PushedScreen extends React.Component {
constructor(){
  super();
  this.state = {
    currentIndex: 0,
    canLoadMoreContent: true,
    restaurants:[],
    isLoading:false
  };
}

async componentDidMount() {
  await Expo.Font.loadAsync({
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
  });
}
componentDidMount(){
  this.fetchRestaurants();
}
  
  static navigationOptions = {
    /*headerTitle:  <Input placeholder={"Input Here..."}
                    onChangeText={(text) => {
                      console.log(text)}
                    }/>*/
  };

  render() {
    return (
    <View>
      {this._renderListView()}
    </View>
    );
  }

  _renderLoading(){
    return (<ActivityIndicator size="small" color="#00ff00" />);
  }
  renderHeader = () => {
    return (<View>
      <Item>
        <Icon name="ios-search" />
        <Input onFocus={() => {
          this.props.navigation.navigate('Search');
        }} placeholder="Search" />
      <Button transparent>
        <Text>Search</Text>
      </Button>
      </Item>
      </View>);
  };

  _renderListView(){
    return (<FlatList
      data={this.state.restaurants}
      renderItem={({item}) => {
        return (
          <ListItem
          avatar={{ size:'xlarge' , uri: item.thumb }}
          title={item.address}
          subtitle={item.address}
          onPress={() => {
            this.props.navigator.push({
              screen: 'example.DetailScreen', // unique ID registered with Navigation.registerScreen
              titleImage: require('../img/home.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
              passProps: { text :'fuck'}, // Object that will be passed as props to the pushed screen (optional)
              animated: true, // does the push have transition animation or does it happen immediately (optional)
              animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
              backButtonTitle: undefined, // override the back button title (optional)
              backButtonHidden: false, // hide the back button altogether (optional)
              previewCommit: true, // commit to push preview controller to the navigation stack (optional)
            });
          }}
        />  
      );
      }}
      onEndReached={() => {
        if(!this.state.isLoading){
          this.fetchRestaurants();
        }
      }}
      refreshing={this.state.isLoading}
      onEndReachedThreshold={0.1}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={this.renderHeader}
      ListFooterComponent={this._renderLoading}
    />);
  }

  fetchRestaurants() {
    console.log('current Index '+  this.state.currentIndex * 20);
    this.setState({isLoading:true});
    return fetch('https://ifoodie.tw/api/blog/?offset=' + this.state.currentIndex * 20 +'&order_by=-date&city_name=%E6%96%B0%E7%AB%B9')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          restaurants:[...this.state.restaurants, ...responseJson.response],
          isLoading:false,
          currentIndex: this.state.currentIndex+1
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
