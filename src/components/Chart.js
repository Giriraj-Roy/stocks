import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
// import { LineChart } from 'react-native-chart-kit'
import {LineChart} from 'react-native-charts-wrapper';
import {AppContext} from '../utils/AppContext';
import Loader from './Loader';

const Chart = ({sampleData}) => {
  return (
    //TODO: React Native Chart Wrapper
    <LineChart
      data={{
        dataSets: [{values: sampleData}],
      }}
      width={Dimensions.get('window').width}
      height={220}
      yAxisLabel="$"
      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2,
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
      chartDescription={{text: ''}}
      xAxis={{
        position: 'BOTTOM',
      }}
      yAxis={{
        left: {enabled: true},
        right: {enabled: false},
      }}
      legend={{
        enabled: false,
      }}
      marker={{
        enabled: true,
        markerColor: '#F0C0FF8C',
        textColor: '#000',
        markerFontSize: 14,
      }}
      drawGridBackground={false}
      //   borderColor={processColor('teal')}
      borderWidth={1}
      //   drawBorders={true}
      touchEnabled={true}
      dragEnabled={true}
      scaleEnabled={false}
      //   scaleXEnabled={true}
      //   scaleYEnabled={true}
      pinchZoom={true}
      doubleTapToZoomEnabled={true}
      dragDecelerationEnabled={true}
      dragDecelerationFrictionCoef={0.99}
    />
  );
};

export default Chart;

const styles = StyleSheet.create({});
