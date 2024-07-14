import {StyleSheet, Text, View} from 'react-native';
import React, { useContext } from 'react';
import { AppContext } from '../utils/AppContext';

const StockDesc = ({stock, stockParams}) => {

  const {isDarkMode} = useContext(AppContext)

  return (
    <View
      style={{
        marginVertical: 10,
        width: '95%',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'lightgray',
        borderRadius: 8,
        padding: 10,
      }}>
      <Text style={{color:  isDarkMode ? "white" : 'black', paddingBottom: 10, borderBottomWidth: 1}}>
        {' '}
        About {stock?.Name}
      </Text>
      <Text style={{marginVertical: 6, color:  isDarkMode ? "white" : 'black', textAlign: 'justify'}}>
        {stock?.Description}
      </Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <View
          style={{
            marginVertical: 4,
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderRadius: 30,
            backgroundColor: '',
          }}>
          <Text style={{color:  isDarkMode ? "white" : 'black'}}>Industry : {stock?.Industry}</Text>
        </View>
        <View
          style={{
            marginVertical: 4,
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderRadius: 30,
            backgroundColor: '',
          }}>
          <Text style={{color:  isDarkMode ? "white" : 'black'}}>Sector : {stock?.Sector}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {stockParams?.map(ele => {
          return (
            <View key={ele?.id}>
              <Text style={{color:  isDarkMode ? "white" : 'black'}}>{ele?.name}</Text>
              <Text style={{fontWeight: '600', color:  isDarkMode ? "white" : 'black'}}>
                {ele?.value}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default StockDesc;

const styles = StyleSheet.create({});
