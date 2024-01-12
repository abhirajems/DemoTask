import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainScreen from '../MainScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Navigation = () => {
    const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='MainScreen' component={MainScreen} options={{headerShown:false}}/>

        </Stack.Navigator>


      </NavigationContainer>
        )
}

export default Navigation