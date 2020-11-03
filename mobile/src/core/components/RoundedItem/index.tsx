import React from 'react'
import { View, Text, ImageProps, StyleSheet, ViewStyle } from 'react-native'
import RoudedBox from '../RoudedBox'

type Props = {
  source: ImageProps["source"];
  title: string;
  subtitle: string;
  width?: string | number;
  height?: string | number;
  padding?: number;
  styles?: ViewStyle
}

const RoundedItem = ({ title, subtitle, styles = {}, source, width = "50%", height = 133, padding = 5 }:Props) => {
  return (
    <View style={[{
      width: width,
      padding: padding
    }, styles]}>
      <RoudedBox 
        source={source}          
        width="100%"
        height={height}
      /> 
      <Text style={baseStyles.title}>{title}</Text> 
      <Text style={baseStyles.subtitle}>{subtitle}</Text> 
    </View>  
  )
}

const baseStyles = StyleSheet.create({
  title: {
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
    marginTop: 5,
    color: "#E6E7F2"
  },
  subtitle: {
    fontFamily: "Roboto_300Light",
    fontSize: 13,
    color: "#98A1BD",
    marginTop: 3,
    textTransform: "uppercase",
    marginBottom: 10
  }
})

export default RoundedItem
