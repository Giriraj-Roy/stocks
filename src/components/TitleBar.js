import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TitleBar = ({screen}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, color: "black"}}>{screen}</Text>
    </View>
  )
}

export default TitleBar

const styles = StyleSheet.create({
    container :{
        backgroundColor : '#ffffff',
        height : 50,
        paddingHorizontal: 16,
        paddingVertical: 8,
    }
})