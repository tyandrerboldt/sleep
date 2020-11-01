import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Roboto_300Light,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }else{
    return (
      <View style={styles.container}>        
        <Routes />
        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
