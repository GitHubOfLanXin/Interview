import React, { Component } from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInput, SafeAreaView, StyleSheet, StatusBar, Text } from 'react-native';
import { Button, H4, Flex, Spacing, P, Icon, CheckBox, Badge,View } from '@uiw/react-native';

import Global from '../../global';
import Footer from '../../components/Footer';
import { logoLight } from '../../components/icons/signin';
import conf from '../../config'
class ShopingCart extends Component {
  state = {
    hostType: ''
  }
  arr = [1, 2, 3, 4, 5, 5]
  render() {
    const { listdata, } = this.props;

    return (
      <SafeAreaView>
        {listdata.map((item) => {
          return (
          <Text>{item.title}</Text>
          )
        })}
        <Text>{listdata[0].title}</Text>
      </SafeAreaView>
    );
  }
}


export default connect(
  ({ users }) => ({
    listdata: users.listdata,
  }),
  ({ users }) => ({
    getlist: users.getlist,
  }),
)(ShopingCart);


