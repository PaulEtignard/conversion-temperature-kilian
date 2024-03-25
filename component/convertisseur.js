import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import TextInput from './TextInput';
import Bouton from './bouton';
import Result from './resultat';

const Convertisseur = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertToCelsius = () => {
    const celsiusValue = (parseFloat(fahrenheit) - 32) * 5 / 9;
    setCelsius(celsiusValue.toFixed(2));
  }

  const getBackgroundImage = () => {
    if (parseFloat(celsius) > 10) {
      return require('../../img/hot.png');
    } else {
      return require('../../img/cold.png');
    }
  }

  return (
    <ImageBackground source={getBackgroundImage()} style={styles.background}>
      <View style={styles.container}>
      <TextInput
        label="Entrez une valeur en Fahrenheit"
        value={fahrenheit}
        onChangeText={setFahrenheit}
      />
      <Bouton onPress={convertToCelsius} title="Convertir" />
      <Result result={celsius} label="Degrés Celsius" />
    </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
});

export default Convertisseur;
