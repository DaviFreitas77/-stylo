import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import Logo from '../../componentes/Logo';
import CustomTextInput from '../../componentes/TextInput';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font'
export default function Button({ text,acao}) {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular
    });


    return (
        <View style={styles.container}>
            <Pressable
            onPress={acao}
            style={styles.btn}>
                <Text style={{color:'#fff',fontSize:18}}>{text}</Text>
            </Pressable>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%"

    },
    btn:{
        backgroundColor:"#ED145B",
        width:'100%',
        height:60,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5

    }
});
