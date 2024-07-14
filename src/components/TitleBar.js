import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../utils/AppContext'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const TitleBar = ({navigation, screen}) => {

  const {isDarkMode, toggleDarkMode} = useContext(AppContext)

  return (
    <View style={[styles.container, {backgroundColor: isDarkMode ? Colors.darker : "white"}]}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        {
          screen != "Top Stocks" &&
          <TouchableOpacity onPress={()=>navigation.goBack()}>
              {
                isDarkMode ?
                <Image source={require('../assets/images/arrow_white.png')} style={{width: 25, height: 25, paddingHorizontal: 10}}/>
                :
                <Image source={require('../assets/images/arrow.png')} style={{width: 25, height: 25, paddingHorizontal: 10}}/>
              }
                
          </TouchableOpacity>
        }
        <Text style={{fontSize: 20, color: isDarkMode ? "white" : "black" , marginHorizontal: 5}}>{screen}</Text>
      </View>
      {
        screen != "Top Stocks" ?
        <View>
          
          <TouchableOpacity
            onPress={()=>navigation.navigate("Search")}
            style={{width: 150, height: 40, paddingHorizontal: 10, backgroundColor: "", alignItems: "center", justifyContent: "center", borderRadius: 8, borderWidth: 1, borderColor: isDarkMode ? Colors.lighter : "gray"}}
          >
            <Text style={{color:  isDarkMode ? "white" : "black"}}>Search</Text>
          </TouchableOpacity>

        </View>

        :
        <TouchableOpacity onPress={()=>toggleDarkMode()} style={{borderWidth: 1, borderColor: isDarkMode ? "white" : "black", padding: 6, paddingHorizontal: 12, borderRadius: 6}}>
          <Text style={{fontSize: 14, color: isDarkMode ? "white":"black"}}>Switch To {isDarkMode ? "Light" : "Dark" } Theme</Text>
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