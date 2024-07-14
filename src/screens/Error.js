import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../utils/AppContext'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Error = () => {
  const {isDarkMode} = useContext(AppContext)

  return (
    <SafeAreaView style={{flex:1, alignItems: "center", justifyContent: "center", backgroundColor: isDarkMode ? Colors.darker : Colors.lighter}}>
      <Text style={{color: isDarkMode ? "white" : "black", fontWeight: "700", fontSize: 32}}>Oops!</Text>
      <Text style={{color: isDarkMode ? "white" : "black", fontWeight: "700", fontSize: 24}}>Something went wrong</Text>
    </SafeAreaView>
  )
}

export default Error

const styles = StyleSheet.create({})