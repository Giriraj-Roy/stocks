import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TitleBar = ({navigation, screen}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Text style={{marginHorizontal: 10}}>🔙</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 24, color: "black"}}>{screen}</Text>
      </View>
      {
        screen != "Stocks App" &&
        <View>
          <TextInput
            placeholder='Search'
          />
        </View>
      }
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
        flexDirection: "row",
        alignItems : "center",
        justifyContent: "space-between"
    }
})