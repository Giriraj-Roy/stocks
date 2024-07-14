import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GETRequest from '../utils/Apis'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Search = ({navigation}) => {
    const [query, setQuery] = useState("")
    const [matches, setMatches] = useState([])
  
    const dummyMatches = [{"1. symbol": "TSCO.LON", "2. name": "Tesco PLC", "3. type": "Equity", "4. region": "United Kingdom", "5. marketOpen": "08:00", "6. marketClose": "16:30", "7. timezone": "UTC+01", "8. currency": "GBX", "9. matchScore": "0.7273"}, {"1. symbol": "TSCDF", "2. name": "Tesco plc", "3. type": "Equity", "4. region": "United States", "5. marketOpen": "09:30", "6. marketClose": "16:00", "7. timezone": "UTC-04", "8. currency": "USD", "9. matchScore": "0.7143"}, {"1. symbol": "TSCDY", "2. name": "Tesco plc", "3. type": "Equity", "4. region": "United States", "5. marketOpen": "09:30", "6. marketClose": "16:00", "7. timezone": "UTC-04", "8. currency": "USD", "9. matchScore": "0.7143"}, {"1. symbol": "TCO2.FRK", "2. name": "TESCO PLC ADR/1 LS-05", "3. type": "Equity", "4. region": "Frankfurt", "5. marketOpen": "08:00", "6. marketClose": "20:00", "7. timezone": "UTC+02", "8. currency": "EUR", "9. matchScore": "0.5455"}, {"1. symbol": "TCO0.FRK", "2. name": "TESCO PLC LS-0633333", "3. type": "Equity", "4. region": "Frankfurt", "5. marketOpen": "08:00", "6. marketClose": "20:00", "7. timezone": "UTC+02", "8. currency": "EUR", "9. matchScore": "0.5455"}]
  
    // useEffect(()=>{
    //   fetchSearchResults();
    // },[query])
  
    //API call to fetch search results
    const fetchSearchResults = async (text)=>{
      try{ 
        const response = await GETRequest(text, `function=SYMBOL_SEARCH&keywords=${text}`)
        console.log("matches", text, response);
        setMatches(response?.bestMatches)
  
      }catch(e){
        console.error("fetchSearchResults", e);
      }
    }
    const handleSearch = (text) => {
      setQuery(text);
      setTimeout(()=>{
        if (text === '') {
          setMatches([]); // Clear suggestions when the query is empty
        } else {
          fetchSearchResults(text);
        }
      },2000)
    };
  return (
    <SafeAreaView style={{flex :1, backgroundColor: Colors.lighter }}>
        <View style={{flexDirection: "row", alignItems: "center", borderRadius: 8, borderWidth: 1, borderColor: "gray"}}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Image source={require('../assets/images/arrow.png')} style={{width: 25, height: 25, paddingHorizontal: 10}}/>
            </TouchableOpacity>
            <TextInput
                style={{width: "80%", height: 40, paddingHorizontal: 10, backgroundColor: "", alignItems: "center", }}
                placeholder='Search'
                placeholderTextColor={"black"}
                value={query}
                onChangeText={text => handleSearch(text)}
            />
        </View>
        <View style={{ backgroundColor: "white", width: "100%",paddingHorizontal: 10}}>
              <FlatList
                data={matches}
                keyExtractor={(item) => item.id}
                renderItem={({item})=>{
                  return (
                    <TouchableOpacity onPress={()=> navigation.navigate("Details", {symbol : item["1. symbol"]})} style={{paddingHorizontal: 15, paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: "lightgray"}}>
                      <Text style={{color: "black"}}>{item["2. name"]}</Text>
                    </TouchableOpacity>
                  )
                }}
              />
          </View>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({})