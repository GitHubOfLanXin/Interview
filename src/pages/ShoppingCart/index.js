import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Button, List, Icon } from '@uiw/react-native';

export default class MyScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
          <List
            flat={true}
            data={[
              // MyHomeSetting
              { title: '点击楼层进如相应的楼' },
              { title: '一楼', onPress: () => navigation.navigate('ShoppingCartUp')  },
              { title: '二楼', onPress: () => navigation.navigate('ShoppingCartDown')  },
            ]}
            renderItem={({ item, index }) => {
              return (
                <List.Item
                  key={index}
                  extra={<Icon name="right" fill="#abb0b5" size={14} />}
                  size="large"
                  paddingLeft={15}
                  style={{ borderBottomWidth: 0, }}
                  onPress={item.onPress || null}
                >
                  <View>
                    <Text>{item.title}</Text>
                  </View>
                </List.Item>
              )
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}