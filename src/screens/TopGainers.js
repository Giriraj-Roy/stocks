import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TopCards from '../components/TopCards'
import TitleBar from '../components/TitleBar'
import Loader from '../components/Loader'

const TopGainers = ({navigation}) => {

  const [loading, setLoading] = useState(false)

  const fetchTopGainers = async ()=>{
    try{
      
      setLoading(false)
    }catch(e){
      console.error("fetchTopGainers");
    }
  }

  return (
    loading ? <Loader/> :
    <View style={{flex: 1, backgroundColor: "white"}}>
      <TitleBar navigation={navigation} screen="Stocks App"/>
      {/* <Text>TopGainers</Text> */}

        <FlatList
            bounces={false}
            showsHorizontalScrollIndicator={false}
            data={[1,2,3,4,5,6,7,8,9,10]}
            numColumns={2}
            renderItem={({item})=> <TopCards navigation={navigation} item={item}/>}
            keyExtractor={item => item}
            contentContainerStyle={{alignSelf: "center", justifyContent: "space-evenly", paddingBottom: 50}}
        />


    </View>
  )
}

export default TopGainers

const styles = StyleSheet.create({})