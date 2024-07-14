import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import TopCards from '../components/TopCards'
import top_gainers from '../assets/sampledata/TopGainersData'
import TitleBar from '../components/TitleBar'
import Loader from '../components/Loader'
import { AppContext } from '../utils/AppContext'
import GETRequest from '../utils/Apis'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const TopGainers = ({navigation}) => {

  const {loading, isDarkMode} = useContext(AppContext)
  const [topGainers, setTopGainers] = useState([])

  const fetchTopGainers = async ()=>{
    try{
      const response = await GETRequest('top_gainers', 'function=TOP_GAINERS_LOSERS')
      console.log("Top Gainers", response);
      setTopGainers(response.top_gainers)
      
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
    <View style={{flex: 1, backgroundColor: isDarkMode ? Colors.darker : "white"}}>
      <TitleBar navigation={navigation} screen="Top Stocks"/>

        <FlatList
            bounces={false}
            showsHorizontalScrollIndicator={false}
            data={topGainers}
            numColumns={2}
            renderItem={({item, index})=> <TopCards index={index} navigation={navigation} item={item}/>}
            keyExtractor={item => item}
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            contentContainerStyle={{alignSelf: "center", justifyContent: "space-evenly", paddingBottom: 50}}
        />


    </View>
  )
}

export default TopGainers

const styles = StyleSheet.create({})