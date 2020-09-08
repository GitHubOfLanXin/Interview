import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Button, List, Icon } from '@uiw/react-native';


export default class MyScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <List
            flat={true}
            data={[
              // MyHomeSetting
              { title: '一' },
              { title: '二' },
              { title: '三' },
              { title: '五' },
              { title: '六' },
              { title: '七' },
              { title: '八' },
              { title: '九' },
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