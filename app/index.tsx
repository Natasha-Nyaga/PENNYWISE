import React from 'react';
import {Dimensions} from 'react-native';
import { Text, View, Image, Button, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";

//Getting the screen dimensions
const { width, height } = Dimensions.get('window');

export default function () {
  return (
    <View style={styles.container}>
      <View style = {styles.centerContainer}>
      <Image 
      source={require('../assets/images/pennywise_logo_orange.png')}
      style={styles.logo}
      />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Get Started" onPress={() => {}} />
        <Button title="Login" onPress={() => {}} /> 
      </View>
    </View>
  );
};

const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:  'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'black',
  },
centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
},
  logo: {
    width: width * 0.5,
    height: width * 0.5,
    marginBottom: height * 0.05,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    
  },

});
      