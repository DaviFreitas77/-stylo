import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
export default function Font() {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular
    });


    if (!fontsLoaded) {
        return <Text>Carregando fontes...</Text>;
    }

}


