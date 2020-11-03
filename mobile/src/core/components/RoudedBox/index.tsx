import React from 'react'
import { View, StyleSheet, Image, ImageProps, Text, ViewStyle } from 'react-native'

type Props = {
  title?: string;
  subtitle?: string;
  source: ImageProps["source"];
  width?: number | string;
  height?: number | string;
  padding?: number;
  styles?: ViewStyle;
}

const RoudedBox = ({ source, title, subtitle, height = 233, width = '100%', padding = 0, styles = {} }:Props) => {
  return (
    <View style={[stylesBase.container, {height: height, width: width, padding: padding}, styles]}>
      <Text style={stylesBase.title}>{title}</Text>
      <Text style={stylesBase.subtitle}>{subtitle}</Text>
      <Image
        source={source}
        resizeMode="cover"
        style={stylesBase.background}
      />
    </View>
  )
}

const stylesBase = StyleSheet.create({
  container: {
    position: "relative",    
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  background: {
    position: "absolute",
    zIndex: -1,
    borderRadius: 15,
    width: "100%",
    height: "100%"
  },
  title: {
    color: "#FFE7BF",
    fontFamily: "Roboto_700Bold",
    fontSize: 36,
    textAlign: "center"
  },
  subtitle: {
    color: "#F9F9FF",
    fontFamily: "Roboto_300Light",
    fontSize: 15,
    textAlign: "center",
    marginTop: 5,
    maxWidth: "60%"
  }
})

export default RoudedBox
