import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, Animated } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import FadeIn from '../../core/components/animations/FadeIn';
import Loop from '../../core/components/animations/Loop';

const imageWidth = 1000

const Welcome = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    Animated.delay(2000).start(delay => {
      delay.finished && setShowButton(true)
    })
  }, [])  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Sleep</Text>
      <Text style={styles.subtitle}>Explore the new king of sleep. It uses sound and vesualization to create perfect conditions for refreshing sleep.</Text>
      <Loop
        duration={15000}
        startX={-imageWidth}
        endX={imageWidth}
        styles={{          
          width: imageWidth,
          zIndex: -4
        }}
      >
        <Image resizeMode="contain" style={{width: imageWidth}} source={require('../../core/assets/nuvens.png')} />
      </Loop>          
      <Image 
        source={require('../../core/assets/corujas.png')}
        style={styles.corujas}
        resizeMode="contain"
        />
        {showButton && (
          <FadeIn 
            styles={{
              width:'100%',
              alignItems: 'center'
            }}>
            <RectButton style={styles.button} onPress={() => alert("Click")}>
              <Text style={styles.buttonText}>
                GET STARTED
              </Text>      
            </RectButton>
          </FadeIn>
        )}
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
