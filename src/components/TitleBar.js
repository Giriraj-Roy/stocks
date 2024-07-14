import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React from 'react'

const TitleBar = ({navigation, screen}) => {



  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        {
          screen != "Top Stocks" &&
          <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image source={require('../assets/images/arrow.png')} style={{width: 25, height: 25, paddingHorizontal: 10}}/>
          </TouchableOpacity>
        }
        <Text style={{fontSize: 20, color: "black", marginHorizontal: 5}}>{screen}</Text>
      </View>
      {
        screen != "Top Stocks" ?
        <View>
          
          <TouchableOpacity
            onPress={()=>navigation.navigate("Search")}
            style={{width: 150, height: 40, paddingHorizontal: 10, backgroundColor: "", alignItems: "center", justifyContent: "center", borderRadius: 8, borderWidth: 1, borderColor: "gray"}}
          >
            <Text style={{color: "black"}}>Search</Text>
          </TouchableOpacity>

        </View>

        :
        <TouchableOpacity style={{borderWidth: 1, padding: 6}}>
          <Text style={{color: "black"}}>Switch To theme</Text>
        </TouchableOpacity>
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