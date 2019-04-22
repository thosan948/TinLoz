/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import background from './container/images/background.jpg';
import ic_avatar from './container/images/ic_avatar.jpg';
import notification from './container/images/notification.png';
import chat from './container/images/chat.png';
import exit from './container/images/exit.png';
import message from './container/images/message.png';
import setting from './container/images/setting.png';
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground source={background} style={{width: '100%', height: '60%', alignItems:'center'}}>
        <Image source={ic_avatar} style={styles.ic_avatar}/>
        <View style={styles.navbot}>
            <Image source={notification}/>
            <Image source={chat}/>
            <Image source={exit}/>
            <Image source={message}/>
            <Image source={setting}/>
        </View>
      </ImageBackground>
        <Text style={styles.welcome}>Hello react-native tôi vừa coding ngày đầu tiên</Text>
        <Text style={styles.instructions}>Tôi sẽ bắt đầu dựng component đầu tiên của ứng dụng</Text>
        <Text style={styles.hello}> Xin chào mình mới code dòng đầu tiên </Text>
      </View>
    );
  }
}
///        

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  ic_avatar: {
    width: '20%',
    height: '20%',
    top: "15%",
    borderRadius: 100,
    borderColor: "#ffffff",
    borderWidth: 3,
  },
  navbot: {
    backgroundColor: '#FFFFFF',
    flexDirection:'row',
    justifyContent:'space-between',
    top: '27%',
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomColor: "#47315a",
    borderTopWidth: 2,
    borderBottomColor: "#47315a",

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  hello: {
    fontSize: 50,
    textAlign: 'left',
    paddingLeft:5,
    color: '#4267B2',
  },
  // nav-bot: {
  //   flex:1,
  // },
});
