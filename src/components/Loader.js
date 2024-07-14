import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../utils/AppContext'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Loader = () => {
  const {isDarkMode} = useContext(AppContext)

  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: isDarkMode ? Colors.darker : Colors.lighter}}>
        <View>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    </SafeAreaView>
  )
}

export default Loader

const styles = StyleSheet.create({})