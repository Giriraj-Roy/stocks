import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const uri = `https://picsum.photos/200`

const TopCards = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri : uri}} style={{width: 50, height: 50}}/>
      <Text>Company Name</Text>
      <Text>Current Value</Text>
      <Text>Percentage</Text>
    </View>
  )
}

export default TopCards

const styles = StyleSheet.create({
    container: {
        margin: 10,
        width : "38%",
        padding: 10,
        // backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 2
    }
})