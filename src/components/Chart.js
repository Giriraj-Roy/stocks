import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
// import { LineChart } from 'react-native-chart-kit'
import {LineChart} from 'react-native-charts-wrapper';
import { AppContext } from '../utils/AppContext';
import Loader from './Loader';

const Chart = ({sampleData, labels, stockClose}) => {

    // console.log("Labels", labels);
    // console.log("StockClose", stockClose);
    const {loading, setLoading} = useContext(AppContext)

    return (
            //   <LineChart
            //       data={{
            //           labels:  labels,
            //           datasets: [
            //               {
            //                   data: stockClose,
            //               },
            //           ],
            //       }}
            //       width={Dimensions.get('window').width} // from react-native
            //       height={220}
            //       yAxisLabel="$"
            //       yAxisSuffix="k"
            //       yAxisInterval={1} // optional, defaults to 1
            //       chartConfig={{
            //           backgroundColor: '#e26a00',
            //           backgroundGradientFrom: '#fb8c00',
            //           backgroundGradientTo: '#ffa726',
            //           decimalPlaces: 2, // optional, defaults to 2dp
            //           color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            //           labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            //           style: {
            //           borderRadius: 16,
            //           },
            //           propsForDots: {
            //           r: '6',
            //           strokeWidth: '2',
            //           stroke: '#ffa726',
            //           },
            //       }}
            //       bezier
            //       style={{
            //           marginVertical: 8,
            //           borderRadius: 16,
            //       }}
            //   />


            //TODO: React Native Chart Wrapper
            <LineChart
                data={{
                    dataSets:
                    [{label: "demo", values: sampleData
                        // [
                        //     {x: 5, y: 90},
                        //     {x: 10, y: 130},
                        //     {x: 50, y: 2000, marker: "eat more"},
                        //     {x: 80, y: 9000, marker: "eat less"}
                        // ]
            }]}}
                width={Dimensions.get('window').width} // from react-native
                height={220}
                yAxisLabel="$"
                chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16,
                }}
            />
            // <Text>hello</Text>
        )
        
    }
    
    export default Chart
    
    const styles = StyleSheet.create({})