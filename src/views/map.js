import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'

const Map = () => {
  return (
    <View style={styles.container}>
        <MapView style={styles.map}>

        </MapView>
   </View>
  )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
})