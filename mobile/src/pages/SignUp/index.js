import { View, Text, StyleSheet,TouchableOpacity,Image} from "react-native";
import * as Progress from 'react-native-progress';
import CustomTextInput from '../../componentes/TextInput';
import Button from '../../componentes/Button';
import { useState,useEffect } from "react";
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';


export default function SignUp() {
  const navigation = useNavigation()
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrarSenha,setMostrarSenha] = useState(true)
  const [step, setStep] = useState(0);

  const progress = step / 4;

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handleBacktStep = () => {
    setStep(step - 1);
  };


  
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={step > 0 ? handleBacktStep : null}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      ),
    });
  }, [navigation, step]); //
  return (
    <View style={styles.container}>
      <Progress.Bar width={500} height={4} color="#ED145B" progress={progress} />

      <Image 
        source={require('../../img/logo.png')}
        style={styles.logo}
      />

      {step === 0 && (
        <View style={styles.containerInputs}>
          <View style={{ gap: 20, marginTop: 100 }}>
            <Text style={styles.h1}>Digite seu CPF</Text>
            <CustomTextInput
              type="cpf"
              placeholder="000-000-000-00"
              onChangeText={(txt) => setCpf(txt)}
              value={cpf}
              keyboardType={'number-pad'}
            />
          </View>
          <Button
            text="Próximo"
            acao={() => cpf.length < 14 ? alert('Preencha os dados corretamente') : handleNextStep()}
          />
        </View>
      )}

      {step === 1 && (
        <View style={styles.containerInputs}>
          <View style={{ gap: 20, marginTop: 100 }}>
            <Text style={styles.h1}>Digite seu nome</Text>
            <CustomTextInput
              type={'null'}
              placeholder="ex: João Silva"
              onChangeText={(txt) => setNome(txt)}
              value={nome}
            />
          </View>
          <Button text="Próximo" acao={() => nome !== '' ? handleNextStep() : alert('Preencha os dados')} />
        </View>
      )}

      {step === 2 && (
        <View style={styles.containerInputs}>
          <View style={{ gap: 20, marginTop: 100 }}>
            <Text style={styles.h1}>Digite seu email</Text>
            <CustomTextInput
              type={'null'}
              placeholder='exemplo: Clodoaldo@gmail.com'
              onChangeText={(txt) => setEmail(txt)}
              value={email}
            />
          </View>
          <Button text="Próximo" acao={() => email !== '' ? handleNextStep() : alert('Preencha os dados')} />
        </View>
      )}
      {step === 3 && (
        <View style={styles.containerInputs}>
          <View style={{ gap: 20, marginTop: 100 }}>
            <Text style={styles.h1}>Digite seu número</Text>
            <CustomTextInput
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99)'
              }}
              placeholder='exemplo: (11)95204-1573'
              onChangeText={(txt) => setNumero(txt)}
              value={numero}
              keyboardType={'number-pad'}
            />
          </View>
          <Button text="Próximo" acao={() => numero.length < 14 ? alert('Preencha os dados corretamente') : handleNextStep()} />
        </View>
      )}
      {step === 4 && (
        <View style={styles.containerInputs}>
          <View style={{ gap: 20, marginTop: 100 }}>
            <Text style={styles.h1}>Digite sua senha</Text>
            <CustomTextInput
              type={'null'}
              placeholder='No minimo 6 caractéres'
              onChangeText={(txt) => setSenha(txt)}
              value={senha}
              secureTextEntry={!mostrarSenha}
            />
            <TouchableOpacity
              onPress={()=>setMostrarSenha(!mostrarSenha)}
            style={styles.eye}>
              <Entypo name={mostrarSenha ? "eye" : "eye-with-line"} size={24} color="black"  />
            </TouchableOpacity>
          </View>
          <Button text="Próximo" acao={() => senha !== '' ? handleNextStep() : alert('Preencha os dados')} />
  
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,
    padding: 15,
    paddingTop: 0,
    width: "100%",
  },
  containerInputs: {
    width: "100%",
    gap: 30,
    flex: 1,
    justifyContent: "space-between"
  },
  h1: {
    fontSize: 28,
  },
  eye:{
    position:"absolute",
    top:70,
    left:360
  },
  logo:{
    width:200,
    height:60,
    marginTop:20
  }
});
