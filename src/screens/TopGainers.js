import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopCards from '../components/TopCards'
import TitleBar from '../components/TitleBar'

const TopGainers = ({navigation}) => {
  return (
    <View>
      <TitleBar navigation={navigation} screen="Stocks App"/>
      {/* <Text>TopGainers</Text> */}

        <FlatList
            bounces={false}
            showsHorizontalScrollIndicator={false}
            data={[1,2,3,4,5,6,7,8,9,10]}
            numColumns={2}
            renderItem={()=> <TopCards navigation={navigation}/>}
            keyExtractor={item => item}
            contentContainerStyle={{alignSelf: "center", justifyContent: "space-evenly", paddingBottom: 50}}
        />


    </View>
  )
}

export default TopGainers

const styles = StyleSheet.create({})