import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <View>
            <ActivityIndicator size="largee" color="#0000ff" />
        </View>
    </SafeAreaView>
  )
}

export default Loader

const styles = StyleSheet.create({})