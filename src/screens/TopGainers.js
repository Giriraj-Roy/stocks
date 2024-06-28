import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopCards from '../components/TopCards'

const TopGainers = () => {
  return (
    <View>
      <Text>TopGainers</Text>
      {/* <ScrollView> */}

        <FlatList
            bounces={false}
            showsHorizontalScrollIndicator={false}
            data={[1,2,3,4,5]}
            numColumns={2}
            renderItem={()=> <TopCards/>}
            keyExtractor={item => item}
            contentContainerStyle={{marginRight: -10}}
        />
      {/* </ScrollView> */}


    </View>
  )
}

export default TopGainers

const styles = StyleSheet.create({})