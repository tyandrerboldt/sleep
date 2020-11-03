import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'

type Props = {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }:Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
  <Text style={styles.subtitle}>{subtitle}</Text>
      <Image
        source={require('../../assets/bg-internal.png')}
        resizeMode="cover"
        style={styles.background}
      />
      <Image
        source={require('../../assets/top-stars.png')}
        resizeMode="contain"
        style={styles.stars}
      />
      <Image 
        source={require('../../assets/lua-effect.png')}
        resizeMode="contain"
        style={styles.moonEffect}
      />
      <Image 
        source={require('../../assets/lua-no-effect.png')}
        resizeMode="contain"
        style={styles.moon}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    position: "relative",
    alignItems: "center"
  }, 
  title: {
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    fontSize: 28,
    marginTop: 90,
    color: '#E6E7F2'
  },
  subtitle: {
    fontFamily: 'Roboto_300Light',
    textAlign: "center",
    fontSize: 15,
    marginTop: 10,
    lineHeight: 15 * 1.3,
    maxWidth: "80%",
    color: '#E6E7F2'
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
    top: 25
  },
  moonEffect: {
    position: "absolute",
    width: 50,
    height: 50,
    zIndex: -1,
    left: "19%",
    top: 20
  },
})

export default Header
