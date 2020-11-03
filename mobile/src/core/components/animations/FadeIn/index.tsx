import React, { useState, useEffect } from 'react'
import { Animated, StyleProp, ViewStyle } from 'react-native'

type Props = {
  children: React.ReactNode;
  styles?: StyleProp<ViewStyle>;
}

const FadeIn = ({ children, styles = {} }:Props) => {
  const [opacity] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start()
  }, [])

  return (
    <Animated.View
    style={[
      {
        opacity: opacity,
        transform: [
          {
            scale: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0.85, 1]
            })
          }
        ]
      },
      styles
    ]}
    >
      { children }
    </Animated.View>
  )
}

export default FadeIn
