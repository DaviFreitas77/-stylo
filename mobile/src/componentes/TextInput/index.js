import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { TextInputMask } from 'react-native-masked-text';
export default function CustomTextInput({   options,type, placeholder, value, onChangeText, keyboardType, secureTextEntry }) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }

  if (type === 'null') {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <TextInputMask
        type={type} 
        options={options}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  input: {
    borderBottomWidth: 1,
    fontFamily: 'Poppins_400Regular',
    width: '100%',
    borderColor: '#dfdfdf'
  },
});
