import { useFonts } from 'expo-font';
import CustomButton from '../../components/Button/CustomButton';
import Input from '../../components/Input/Input';
import { useState } from 'react';
import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { useNavigation } from '@react-navigation/native';

export default function Register() {

  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  async function createUser(){
    await createUserWithEmailAndPassword(auth, email, password).then(value => {
      console.log('cadastrado' + value.user.uid);
      navigation.navigate('Login')
    })
    .catch(error => console.log(error));
  };
  return (

    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>
      <Text style={[styles.text, { textAlign: 'left' }]}>Nome de usuário (a)</Text>
      <Input placeholder="Ex. Samuel Cesar"></Input>
      <Text style={[styles.text, { textAlign: 'left' }]}>Nome Completo</Text>
      <Input placeholder="Ex. Samuel Cesar de Oliveira"></Input>
      
      <TextInput
        placeholder="Digite um email..."
        style={styles.input}
        value={email}
        onChangeText={value => setEmail(value)}
      />


      <TextInput
        placeholder="Sua senha"
        style={styles.input}
        value={password}
        onChangeText={value => setPassword(value)}
      />

      <CustomButton
        title="Finalizar"
        onPress={() => createUser()}
        buttonStyle={styles.buttonLogin}
      />
       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{ marginTop: 10, fontFamily: 'Poppins-Light'} }>Já tem uma conta? <Text style={{ fontWeight: 'bold', color: '#535272'}}>Faça seu login</Text></Text>
      </TouchableOpacity>
    </View>

  )
  

  

}




const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  }, 
  title: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: "#535272",
    marginBottom: 50, 
  }, 
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: "#535272",
  }, 
  
  buttonLogin: {
    width: 100, 
    height: 46,
    fontSize: 15,
    marginTop: 20, 
    marginBottom: 20, 
  },
  buttonRegister: {
    marginTop: 10, 
  }
});


