import { View, Text, Dimensions } from 'react-native'
import React from 'react'

const {width,height} = Dimensions.get("window")
export default function App() {
  return (
    <View style={{backgroundColor:"green",flex:1}}>
      <Text style={{
      backgroundColor:"white",
      width:"100%",
      height:40,
      fontSize:30,
      }}>App</Text>
    </View>
  )
}