import React from 'react';
import { View, Text } from 'react-native';

const Resultat = ({ result, label }) => {
  return (
    <View>
      <Text>Résultat: {result} {label}</Text>
    </View>
  );
}

export default Resultat;
