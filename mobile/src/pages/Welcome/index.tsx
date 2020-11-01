import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, Animated } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

const imageWidth = 1000

const Welcome = () => {
  const [nuvemX] = useState(new Animated.Value(-imageWidth));
  const [buttonOpacity] = useState(new Animated.Value(0));
  
  useEffect(() => {
    if(nuvemX){
      startAnimation()
      Animated.delay(2000).start(delay => {
        delay.finished && Animated.timing(buttonOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }).start()
      })
    }
  }, [])
  
  const startAnimation = () => {
    nuvemX.setValue(-imageWidth)
    Animated.sequence([
      Animated.timing(nuvemX, {
        toValue: imageWidth,
        duration: 15000,
        useNativeDriver: true
      })
    ]).start(anima => {
      if(anima.finished){
        startAnimation()
      }
    });
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Sleep</Text>
      <Text style={styles.subtitle}>Explore the new king of sleep. It uses sound and vesualization to create perfect conditions for refreshing sleep.</Text>
      <Animated.Image  
        resizeMode="contain"      
        style={{
          position: "absolute",
          width: imageWidth,
          zIndex: -4,
          transform: [{translateX: nuvemX}]
        }}
        source={require('../../core/assets/nuvens.png')} />      
      <Image 
        source={require('../../core/assets/corujas.png')}
        style={styles.corujas}
        resizeMode="contain"
        />
        <Animated.View
          style={[
            {
              opacity: buttonOpacity,
              transform: [
                {
                  scale: buttonOpacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.85, 1]
                  })
                }
              ]
            },
            styles.buttonContainer
          ]}
        >
          <RectButton style={styles.button} onPress={() => alert("Click")}>
            <Text style={styles.buttonText}>
              GET STARTED
            </Text>      
          </RectButton>
        </Animated.View>
      <Image 
        source={require('../../core/assets/lua.png')}
        style={styles.moon}
        />
      <Image 
        style={styles.background}
        resizeMode="cover" 
        source={require('../../core/assets/neblina.png')} />
      <Image 
        style={styles.backgroundStars}
        resizeMode="contain" 
        source={require('../../core/assets/stars.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#03174C',
  },
  background: {
    position: "absolute",
    zIndex: -3,
    width: "120%",
    height: "120%"
  },
  backgroundStars: {
    position: "absolute",
    zIndex: -2,
    width: "100%",
    height: "100%"
  },
  moon: {
    position: "absolute",
    zIndex: -1,
    left: "15%",
    top: "3%",
    width: 80,
    height: 80,
  },
  title: {
    fontFamily: "Roboto_700Bold",
    fontWeight: "bold", 
    fontSize: 30,
    marginTop: "15%",
    textAlign: "center",
    color: "#EBEAEC"
  },
  subtitle: {
    fontFamily: "Roboto_300Light",
    marginTop: 15,
    maxWidth: "85%",
    fontSize: 16,
    textAlign: "center",
    color: "#EBEAEC"
  },
  corujas: {
    width: "90%",
    height: 300,
    alignSelf: "flex-end"
  },
  button: {
    backgroundColor: "#8E97FD",
    width: "90%",
    height: 63,
    borderRadius: 38,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"

  },
  buttonText: {
    fontFamily: "Roboto_700Bold",
    color: "#EBEAEC",
  }
});

export default Welcome
