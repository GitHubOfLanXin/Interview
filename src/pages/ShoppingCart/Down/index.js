import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default class MyScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text style={{backgroundColor:'red',height: 50}}>我是楼下辖下ixa</Text>
        </View>
      </SafeAreaView>
    );
  }
}