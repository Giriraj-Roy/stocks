import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import baseUrl from '../constants/baseUrl'

const TitleBar = ({navigation, screen}) => {



  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        {
          screen != "Stocks App" &&
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Text style={{marginHorizontal: 10}}>🔙</Text>
          </TouchableOpacity>
        }
        <Text style={{fontSize: 20, color: "black"}}>{screen}</Text>
      </View>
      {
        screen != "Stocks App" &&
        <View>
          
          <TouchableOpacity
            onPress={()=>navigation.navigate("Search")}
            style={{width: 150, height: 40, paddingHorizontal: 10, backgroundColor: "", alignItems: "center", justifyContent: "center", borderRadius: 8, borderWidth: 1, borderColor: "gray"}}
          >
            <Text style={{color: "black"}}>Search</Text>
          </TouchableOpacity>

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