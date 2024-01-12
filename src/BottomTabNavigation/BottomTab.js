import { Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Images from '../Images';
import { LogBox } from 'react-native';
import LikedScreen from '../LikedScreen';
import ChatScreen from '../ChatScreen';
import ProfileScreen from '../ProfileScreen';
import HomeScreen from '../HomeScreen';

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator  tabBarOptions={{
        activeTintColor: '#bd2aba', 
        inactiveTintColor: 'gray',
      }} initialRouteName='Chat'>
  


  <Tab.Screen name="Home" component={HomeScreen}  options={{
          headerShown: true,
          tabBarIcon: ({color}) => {
            return (
              <Image
                style={{height: 20, width: 20, tintColor: color}}
                source={Images.Homes}
                
              />
            );
          },
        }}/>
    <Tab.Screen name="Liked You" component={LikedScreen}  options={{
          headerShown: true,
          tabBarIcon: ({color}) => {
            return (
              <Image
                style={{height: 20, width: 20, tintColor: color}}
                source={Images.like}
                
              />
            );
          },
        }}/>
        
             <Tab.Screen name="Chat" component={ChatScreen}  options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return (
              <Image
                style={{height: 20, width: 20, tintColor: color}}
                source={Images.chat}
                
              />
            );
          },
        }}/>
    <Tab.Screen name="Profile" component={ProfileScreen}  options={{
          headerShown: true,
          tabBarIcon: ({color}) => {
            return (
              <Image
                style={{height: 20, width: 20, tintColor: color}}
                source={Images.profile}
                
              />
            );
          },
        }}/>


  </Tab.Navigator>
  )
}

export default BottomTab