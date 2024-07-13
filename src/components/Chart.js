import {Dimensions, processColor, StyleSheet} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-charts-wrapper';


const Chart = ({sampleData}) => {
  return (
    //TODO: React Native Chart Wrapper
    <LineChart
      data={{
        dataSets: [{values: sampleData}],
        config: {
          drawFilled: true, // Enable the background fill
          fillColor: processColor('red'), // Background color under the curve
          // fillAlpha: 100, // Transparency level (0-255)
          // color: processColor('#ff7043'), // Line color
          // drawValues: false,
        }
      }}
      width={Dimensions.get('window').width}
      height={220}
      yAxisLabel="$"
      // chartConfig={{
      //   backgroundColor: '#e26a00',
      //   backgroundGradientFrom: '#fb8c00',
      //   backgroundGradientTo: '#ffa726',
      //   fillColor: processColor('rgba(255, 255, 0, 1)'),
      //   fillAlpha: 100,
      //   drawFilled: true,
      //   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      //   style: {
      //     borderRadius: 16,
      //   },
      // }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
      chartDescription={{text: ''}}
      xAxis={{
        position: 'BOTTOM',
        drawLabels: false
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
      // touchEnabled={true}
      // dragEnabled={true}
      // scaleEnabled={false}
      //   scaleXEnabled={true}
      //   scaleYEnabled={true}
      // pinchZoom={true}
      // doubleTapToZoomEnabled={true}
      // dragDecelerationEnabled={true}
      // dragDecelerationFrictionCoef={0.99}
    />
  );
};

export default Chart;

const styles = StyleSheet.create({});
