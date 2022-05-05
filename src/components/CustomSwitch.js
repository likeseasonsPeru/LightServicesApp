import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomSwitch = ({
  opt1,
  opt2,
  onSelectSwitch
}) => {
  const [getSelectionMode, setSelectionMode] = useState('inquilino')
  const updatedSwitchData = async (val) => {
    setSelectionMode(val)
    onSelectSwitch(val)
    await AsyncStorage.setItem('language', val)
  }
//   const sendLng = async() => {
//     await AsyncStorage.setItem('language', getSelectionMode)
//   }
//   useEffect(() => {
//     sendLng()
//   }, [])

  return (
    <View>
      <View
        style={ styles.container }>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={ () => updatedSwitchData('inquilino') }
          style={
            getSelectionMode === 'inquilino' ? styles.status1 : styles.status2
          }>
          <Text
            style={ styles.text }>
            { opt1 }
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={ () => updatedSwitchData('arrendador') }
          style={ getSelectionMode === 'inquilino' ? styles.status2 : styles.status1 } >
          <Text
            style={ styles.text }>
            { opt2 }
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: "100%",
    textAlign: "center",
    backgroundColor: "#8F9290",
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: "auto"
  },
  status1: {
    flex: 1,
    backgroundColor: "rgb(99, 175, 75)",
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  status2: {
    flex: 1,
    backgroundColor: "#8F9290",
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12
  },
  text: {
    color: 'white',
    fontSize: 14
  }
})

export default CustomSwitch
