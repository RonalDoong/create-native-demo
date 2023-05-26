// Tao navigation tao ra 2 man hinh login va home khi vao app hien thi ra login dung thong tin chuyen sang home
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginComp from './comp/LoginComp'
import HomeComp from './comp/HomeComp'

const StackDemo = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackDemo.Navigator initialRouteName='LoginComp'>
           <StackDemo.Screen name='HomeComp' component={HomeComp} options={{title: 'Trang chủ'}}/>
           <StackDemo.Screen name='LoginComp' component={LoginComp} options={{headerShown: false}}/>
      </StackDemo.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})