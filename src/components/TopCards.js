import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const uri = `https://picsum.photos/200`

const TopCards = ({navigation}) => {

  // const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("Details")}>
      <Image source={{uri : uri}} style={styles.image}/>
      <Text style={{marginVertical: 10, fontSize: 17, color: "black", fontWeight: 500}} numberOfLines={2}>Company Name Company Name Company Name Company Name Company Name</Text>
      <Text style={{marginVertical: 8, fontSize: 17}}>Current Value</Text>
      <Text style={{marginBottom: 4, fontSize: 17}}>Percentage</Text>
    </TouchableOpacity>
  )
}

export default TopCards

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: '45%',
    padding: 10,
    // backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'lightgray',
  },
  image: {
    width: 60,
    height: 60,
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 30,
  },
});