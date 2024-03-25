import React from 'react';
import { TextInput as RNTextInput, View, Text, StyleSheet } from 'react-native';

const TextInput = ({ label, value, onChangeText }) => {
  return (
    <View>
      <Text>{label}</Text>
      <RNTextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10
  },
});

export default TextInput;
