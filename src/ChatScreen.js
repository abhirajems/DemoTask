import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import TopTabNavigation from './TopTabNavigation';   

const ChatScreen = () => {
  return (
    <View style={styles.container}>
        <View><Text style={styles.mssgTxt}>Messages</Text></View>
        <TopTabNavigation/>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F0F8FE'
    },
    mssgTxt:{
        fontSize:responsiveFontSize(3),
        fontWeight:'bold',
        color:'black',
        marginVertical:responsiveHeight(4),
        marginLeft:responsiveWidth(5)
    }
})