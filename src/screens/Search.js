import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Search = ({navigation}) => {
    const [query, setQuery] = useState("")
    const [matches, setMatches] = useState([])
  
    const dummyMatches = [{"1. symbol": "TSCO.LON", "2. name": "Tesco PLC", "3. type": "Equity", "4. region": "United Kingdom", "5. marketOpen": "08:00", "6. marketClose": "16:30", "7. timezone": "UTC+01", "8. currency": "GBX", "9. matchScore": "0.7273"}, {"1. symbol": "TSCDF", "2. name": "Tesco plc", "3. type": "Equity", "4. region": "United States", "5. marketOpen": "09:30", "6. marketClose": "16:00", "7. timezone": "UTC-04", "8. currency": "USD", "9. matchScore": "0.7143"}, {"1. symbol": "TSCDY", "2. name": "Tesco plc", "3. type": "Equity", "4. region": "United States", "5. marketOpen": "09:30", "6. marketClose": "16:00", "7. timezone": "UTC-04", "8. currency": "USD", "9. matchScore": "0.7143"}, {"1. symbol": "TCO2.FRK", "2. name": "TESCO PLC ADR/1 LS-05", "3. type": "Equity", "4. region": "Frankfurt", "5. marketOpen": "08:00", "6. marketClose": "20:00", "7. timezone": "UTC+02", "8. currency": "EUR", "9. matchScore": "0.5455"}, {"1. symbol": "TCO0.FRK", "2. name": "TESCO PLC LS-0633333", "3. type": "Equity", "4. region": "Frankfurt", "5. marketOpen": "08:00", "6. marketClose": "20:00", "7. timezone": "UTC+02", "8. currency": "EUR", "9. matchScore": "0.5455"}]
  
    useEffect(()=>{
      fetchSearchResults();
    },[query])
  
    //API call to fetch search results
    const fetchSearchResults = async (text)=>{
      try{ 
        // const response = await axios.get(`${baseUrl}query?function=SYMBOL_SEARCH&keywords=${text}&apikey=demo`)
        // console.log("search res", response.data.bestMatches);
        // setMatches(response?.data?.bestMatches)
        setMatches(dummyMatches)
  
      }catch(e){
        console.error("fetchSearchResults", e);
      }
    }
    const handleSearch = (text) => {
      setQuery(text);
      if (text === '') {
        setMatches([]); // Clear suggestions when the query is empty
      } else {
        fetchSearchResults(text);
      }
    };
  return (
    <View>
      <TextInput
            style={{width: "100%", height: 40, paddingHorizontal: 10, backgroundColor: "", alignItems: "center", borderRadius: 8, borderWidth: 1, borderColor: "gray"}}
            placeholder='Search'
            placeholderTextColor={"black"}
            value={query}
            onChangeText={text => handleSearch(text)}
        />
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
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})