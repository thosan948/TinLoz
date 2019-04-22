/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
  Dimensions, StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import background from '../images/background.jpg';
import ic_avatar from '../images/ic_avatar.jpg';
import notification from '../images/notification.png';
import chat from '../images/chat.png';
import exit from '../images/exit.png';
import message from '../images/message.png';
import setting from '../images/setting.png';

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground source={background} style={styles.imageBG}>
      <View style = {{flex: 1, justifyContent: 'center'}}>
        <Image source={ic_avatar} style={styles.ic_avatar}/>
        </View>

        <View style={styles.navbot}>
          <View style = {styles.viewItemTop}>
            <Image source={notification}/>
            </View>
            <View style = {styles.viewItemTop}>
            <Image source={chat}/>
            </View>
            <View style = {styles.viewItemTop}>
            <Image source={exit}/>
            </View>
            <View style = {styles.viewItemTop}>
            <Image source={message}/>
            </View>
            <View style = {styles.viewItemTop}>
            <Image source={setting}/>
            </View>
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
  imageBG: {
    width: deviceWidth,
    height: deviceWidth*1200/1920,
    alignItems:'center',
    // alignSelf: 'flex-end',
    // justifyContent: 'flex-end'
    justifyContent: 'space-between',
  },
  viewItemTop: {
    width: deviceWidth*.2,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // justifyContent: 'flex-end'
  },
  ic_avatar: {
    width: deviceWidth*0.2,
    height: deviceWidth*0.2,
    // marginTop: 140,
    // top: "15%",
    borderRadius: deviceWidth*0.2/2,
    overflow: "hidden",
    borderColor: "#ffffff",
    borderWidth: 3,
    // justifyContent: 'flex-end'

  },
  navbot: {
    flexDirection:'row',
    justifyContent:'space-between',
    // top: '47%',
    paddingVertical: 5,
    // opacity: 0.3,
    width: deviceWidth,
    // backgroundColor: '#aaa, 0.8',
    backgroundColor: 'rgba(0,0,0,0.5)',
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
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
