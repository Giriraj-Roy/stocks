import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import TopCards from '../components/TopCards'
import top_gainers from '../assets/TopGainersData'
import TitleBar from '../components/TitleBar'
import Loader from '../components/Loader'
import { AppContext } from '../utils/AppContext'

const TopGainers = ({navigation}) => {

  const {loading, setLoading} = useContext(AppContext)
  const [topGainers, setTopGainers] = useState([])

  const fetchTopGainers = async ()=>{
    try{

      setTopGainers(top_gainers.top_gainers)
      
      // setLoading(false)
    }catch(e){
      console.error("fetchTopGainers");
    }
  }

  useEffect(()=>{
    fetchTopGainers()
  },[])

  return (
    loading ? <Loader/> :
    <View style={{flex: 1, backgroundColor: "white"}}>
      <TitleBar navigation={navigation} screen="Stocks App"/>

        <FlatList
            bounces={false}
            showsHorizontalScrollIndicator={false}
            data={topGainers}
            numColumns={2}
            renderItem={({item})=> <TopCards navigation={navigation} item={item}/>}
            keyExtractor={item => item}
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            // windowSize={21}
            contentContainerStyle={{alignSelf: "center", justifyContent: "space-evenly", paddingBottom: 50}}
        />


    </View>
  )
}

export default TopGainers

const styles = StyleSheet.create({})