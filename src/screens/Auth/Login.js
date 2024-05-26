import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import CustomButton from '../../components/Button/CustomButton';
import Input from '../../components/Input/Input';
import { useState } from 'react';
import * as React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('../../../assets/fonts/Poppins-Black.ttf'),
    'Poppins-SemiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  async function loginUser() {
    console.log(email);
    console.log(password);
    await signInWithEmailAndPassword(auth, email, password).then(value => {
      console.log('logado' + value.user.uid);
      navigation.navigate('Home');
    })
      .catch(error => console.log(error));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edushare</Text>
      <Text style={styles.text}>Seja Bem-Vindo (a)</Text>


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
        title="Entrar"
        onPress={() => loginUser()}
        buttonStyle={styles.buttonLogin}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{ marginTop: 10, fontFamily: 'Poppins-Light' }}>Não tem cadastro? <Text style={{ fontWeight: 'bold', color: '#535272' }}>Cadastre-se</Text></Text>
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
    fontSize: 48,
    fontFamily: 'Poppins-Black',
    color: "#535272",
    marginBottom: 72,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: "#535272",
    marginBottom: 20,
  },
  buttonLogin: {
    width: 100,
    height: 46,
    fontSize: 20,
    marginTop: 20,
  },
  buttonRegister: {
    marginTop: 10,
  }
});
