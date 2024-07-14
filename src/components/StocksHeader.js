import {Image, StyleSheet, Text, View} from 'react-native';
import React, { useContext } from 'react';
import { AppContext } from '../utils/AppContext';

const StocksHeader = ({stock, tab, percent, item}) => {

    const uri = `https://picsum.photos/200`
    const {isDarkMode} = useContext(AppContext)


  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: uri}} style={styles.image} />
        <View>
          <Text style={{color:  isDarkMode ? "white" : 'black'}}>{stock?.Name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color:  isDarkMode ? "white" : 'black'}}>{stock?.Symbol}, </Text>
            <Text style={{color:  isDarkMode ? "white" : 'black'}}>{stock?.AssetType}</Text>
          </View>
          <Text style={{color:  isDarkMode ? "white" : 'black'}}>{stock?.Exchange}</Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            color:  isDarkMode ? "white" : 'black',
            fontWeight: '700',
            marginVertical: 4,
            fontSize: 17,
          }}>
          $ {item?.price}
        </Text>
        <Text
          style={{color: tab == 'losers' ? 'red' : 'green', fontWeight: '700'}}>
          {' '}
          {tab != 'losers' && '+ '}
          {percent.toFixed(2)} % {tab == 'losers' && '🔻'}
        </Text>
      </View>
    </View>
  );
};

export default StocksHeader;

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        borderColor: 'lightgray',
        borderWidth: 2,
        borderRadius: 30,
        marginHorizontal: 6
      },
});
