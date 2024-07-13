import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { top_losers } from '../assets/TopGainersData'
import TopCards from '../components/TopCards'
import TitleBar from '../components/TitleBar'
import Loader from '../components/Loader'
import { AppContext } from '../utils/AppContext'

const TopLosers = ({navigation}) => {


  const {loading, setLoading} = useContext(AppContext)
  
  const [topLosers, setTopLosers] = useState([])

  const fetchTopLosers = async ()=>{
    try{

      setTopLosers(top_losers.top_losers)
      
      // setLoading(false)
    }catch(e){
      console.error("fetchTopGainers");
    }
  }

  useEffect(()=>{
    fetchTopLosers()
  },[])

  return (
    loading ? <Loader/> :
    <View style={{flex: 1, backgroundColor: "white"}}>
      <TitleBar navigation={navigation} screen="Stocks App"/>

        <FlatList
            bounces={false}
            showsHorizontalScrollIndicator={false}
            data={topLosers}
            numColumns={2}
            renderItem={({item})=> <TopCards navigation={navigation} item={item} tab={"losers"}/>}
            keyExtractor={item => item}
            contentContainerStyle={{alignSelf: "center", justifyContent: "space-evenly", paddingBottom: 50}}
        />


    </View>
  )
}

export default TopLosers

const styles = StyleSheet.create({})