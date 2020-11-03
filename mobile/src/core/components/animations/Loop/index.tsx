import React, { useState, useEffect } from 'react'
import { Animated, ViewStyle, StyleProp } from 'react-native'

type Props = {
  children: React.ReactNode;
  startX: number;
  endX: number;
  duration: number;
  styles?: StyleProp<ViewStyle>;
}

const Loop = ({children, startX, endX, duration, styles = {}}:Props) => {
  const [positionX] = useState(new Animated.Value(startX));

  useEffect(() => {
    if(startX){
      startAnimation();
    }
  }, [])

  const startAnimation = () => {
    positionX.setValue(startX)
    Animated.sequence([
      Animated.timing(positionX, {
        toValue: endX,
        duration,
        useNativeDriver: true
      })
    ]).start(anima => {
      if(anima.finished){
        startAnimation()
      }
    });
  }

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          transform: [{translateX: positionX}]
        },
        styles
      ]
    }
    >
      {children}
    </Animated.View>
  )
}

export default Loop
