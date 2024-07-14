import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { top_losers } from '../assets/sampledata/TopGainersData'
import TopCards from '../components/TopCards'
import TitleBar from '../components/TitleBar'
import Loader from '../components/Loader'
import { AppContext } from '../utils/AppContext'
import GETRequest from '../utils/Apis'

const TopLosers = ({navigation}) => {


  const {loading, setLoading} = useContext(AppContext)

  const [topLosers, setTopLosers] = useState([])

  const fetchTopLosers = async ()=>{
    try{
      const response = await GETRequest('top_losers', 'function=TOP_GAINERS_LOSERS')
      console.log("Top top_losers", response?.top_losers);
      setTopLosers(response?.top_losers)
      
      // setLoading(false)
    }catch(e){
      console.error("fetchTopLosers", e);
    }
  }

  useEffect(()=>{
    fetchTopLosers()
  },[])

  return (
    loading ? <Loader/> :
    <View style={{flex: 1, backgroundColor: "white"}}>
      <TitleBar navigation={navigation} screen="Top Stocks"/>

        <FlatList
            bounces={false}
            showsHorizontalScrollIndicator={false}
            data={topLosers}
            numColumns={2}
            renderItem={({item, index})=> <TopCards index={index} navigation={navigation} item={item} tab={"losers"}/>}
            keyExtractor={item => item}
            contentContainerStyle={{alignSelf: "center", justifyContent: "space-evenly", paddingBottom: 50}}
        />


    </View>
  )
}

export default TopLosers

const styles = StyleSheet.create({})