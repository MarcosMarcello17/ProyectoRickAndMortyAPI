import React from 'react'
import {View, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return(
    <SafeAreaView>
      <HomeScreen/>
    </SafeAreaView>
  )
}

export default App