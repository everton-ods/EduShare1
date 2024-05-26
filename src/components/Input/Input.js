import React, {useState} from 'react';
import { View, StyleSheet, Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';


const { width } = Dimensions.get('window');
const inputWidth = (380 / 418) * width;

const Input = ({ placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');



 

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[
          styles.input,
          isFocused || value ? styles.inputFocused : null,
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder={isFocused ? '' : placeholder}
        placeholderTextColor='#C2C2C2'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: inputWidth,
    position: 'relative',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    backgroundColor: '#ECF3F1',
    borderWidth: 1,
    borderColor: '#CED4DA',
  },
  placeholder: {
    position: 'absolute',
    left: 10,
    top: 15,
    paddingHorizontal: 30,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#C2C2C2', 
  },
  inputFocused: {
    borderColor: '#535272',
  },
});

export default Input;