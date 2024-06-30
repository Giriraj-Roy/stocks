import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Error = () => {
  return (
    <SafeAreaView style={{flex:1, alignItems: "center", justifyContent: "center"}}>
      <Text>Oops!</Text>
      <Text>Something went wrong</Text>
    </SafeAreaView>
  )
}

export default Error

const styles = StyleSheet.create({})