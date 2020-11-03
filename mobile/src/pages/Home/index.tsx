import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>      
      <View style={styles.header}>
        <Text style={styles.title}>Sleep Stories</Text>
        <Text style={styles.subtitle}>
          Soothing bedtime stories to help you fall into a deep and natural sleep
        </Text>
      </View>
      <Image
        source={require('../../core/assets/bg-internal.png')}
        resizeMode="cover"
        style={styles.background}
      />
      <Image
        source={require('../../core/assets/top-stars.png')}
        resizeMode="contain"
        style={styles.stars}
      />
      <Image 
        source={require('../../core/assets/lua-effect.png')}
        resizeMode="contain"
        style={styles.moonEffect}
      />
      <Image 
        source={require('../../core/assets/lua-no-effect.png')}
        resizeMode="contain"
        style={styles.moon}
      />
    </View>
  )
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#03174C',
    paddingTop: 70
  },
  header: {
    display: "flex",
    paddingHorizontal: 20,
  },
  background: {
    position: "absolute",
    width: '100%',
    zIndex: -3,
    top: 0,
  },
  stars: {
    position: "absolute",
    width: '90%',
    zIndex: -2,
    top: 20,
  },
  moon: {
    position: "absolute",
    width: 50,
    height: 50,
    zIndex: -2,
    left: "15%",
    top: "3%"
  },
  moonEffect: {
    position: "absolute",
    width: 50,
    height: 50,
    zIndex: -1,
    left: "19%",
    top: "1%"
  },
  title: {
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    fontSize: 28,
    color: '#E6E7F2'
  },
  subtitle: {
    fontFamily: 'Roboto_300Light',
    textAlign: "center",
    fontSize: 15,
    marginTop: 10,
    lineHeight: 15 * 1.3,
    color: '#E6E7F2'
  }
})

export default Home
