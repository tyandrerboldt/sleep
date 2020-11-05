import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string;
}

const ReturnableHeader = ({ title }:Props) => {
  const navigation = useNavigation();
  
  const handleOnClickButton = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={{width: "15%"}}>
        <RectButton onPress={handleOnClickButton} style={styles.button}>
          <MaterialIcons 
              name="arrow-back" 
              size={30} 
          />
        </RectButton>
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
      <View style={{width: "15%"}}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "space-between"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6E7F2",
    borderRadius: 25,
    height: 50,
    width: 50
  },
  title: {
    fontFamily: "Roboto_700Bold",
    fontSize: 22,
    color: "#E6E7F2",
    textAlign: "center"
  }
})

export default ReturnableHeader
