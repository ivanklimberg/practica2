import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { FormScreen } from './src/screens/FormScreen'

const App = () => {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <StatusBar 
        backgroundColor="#6c5dcf"
        barStyle="light-content"
      />
      <FormScreen />
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6c5dcf'
  }
})