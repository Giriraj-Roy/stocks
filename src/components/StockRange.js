import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../utils/AppContext'

const StockRange = () => {
    const {setIntraday} = useContext(AppContext)
    return (
        <View style={{width: "100%", flexDirection: "row", justifyContent:"space-around"}}>
        <TouchableOpacity onPress={()=>setIntraday(true)} style={styles.chip}>
            <Text style={styles.chipText}>1 Day</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setIntraday(false)} style={styles.chip}>
            <Text  style={styles.chipText}>1 Month</Text>
        </TouchableOpacity>
        </View>
    )
}

export default StockRange

const styles = StyleSheet.create({
  chip: {
    padding: 10,
    width: 100,
    borderWidth: 2,
    borderColor: 'brown',
    borderRadius: 40,
    alignItems: "center"
  },
  chipText : {
    fontWeight: "700",
    color: "black"
  }
});