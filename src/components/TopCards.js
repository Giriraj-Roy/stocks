import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const uri = `https://picsum.photos/200`

const TopCards = ({navigation, item, tab, index}) => {

  const percent = Number(item?.change_percentage.substring(0, item?.change_percentage.length - 1))
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLayout = (event) => {

    setTimeout(()=>{
      setIsLoaded(true);
    },2000)
  };

  return (
    <TouchableOpacity key={index} style={styles.container} onPress={()=>navigation.navigate("Details", { item : item, tab : tab})}>
      {isLoaded ? (
        <Image source={{uri : uri}} style={styles.image} />
      ) : (
        <View style={styles.image} onLayout={handleLayout} />
      )}
      <Text style={{marginVertical: 10, fontSize: 17, color: "black", fontWeight: 500}} numberOfLines={2}>{item?.ticker}</Text>
      <Text style={{ color: "black", fontWeight: "700", marginVertical: 4, fontSize: 17}}>$ {item?.price}</Text>
      <Text style={{ color: tab=="losers" ? "red" : "green", fontWeight: "700", marginBottom: 4, fontSize: 14}}> {tab!="losers" && "+ " }{percent.toFixed(2)} % {tab=="losers" && "🔻"}</Text>
    </TouchableOpacity>
  )
}

export default TopCards

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: '45%',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: 'lightgray',
  },
  image: {
    width: 60,
    height: 60,
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: "lightgray"
  },
});