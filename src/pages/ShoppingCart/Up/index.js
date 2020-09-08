import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default class MyScreen extends Component {
  // GoDown= () =>{
  //   this.props.navigation.dispatch
  // }
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <View>
          <Text style={{backgroundColor:'yellow',height: 50}} onPress= {this.GoDown} >我是楼上</Text>
        </View>
      </SafeAreaView>
    );
  }
}