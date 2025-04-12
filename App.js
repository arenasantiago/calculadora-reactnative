import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Touchable, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [ numero1, setNumero1 ] = useState('');
  const [ numero2, setNumero2 ] = useState('');
  const [ resultado, setResultado]  = useState(null);
  
  const sumarNumeros = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if(!isNaN(num1) && !isNaN(num2)){
      setResultado(num1 + num2);
    }else{
      setResultado('Ingrese un numero valido');
    };
  }
  const restarNumeros = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if(!isNaN(num1) && !isNaN(num2)){
      setResultado(num1 - num2);
    }else{
      setResultado('Ingrese un numero valido');
    };
  }

  const multiplicarNumeros = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if(!isNaN(num1) && !isNaN(num2)){
      setResultado(num1 * num2);
    }else{
      setResultado('Ingrese un numero valido');
    };
  }
  const dividirNumeros = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if(!isNaN(num1) && !isNaN(num2)){
      setResultado(num1 / num2);
    }else{
      setResultado('Ingrese un numero valido');
    };
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Suma de numeros</Text>
      <Text
      style = {styles.resultado}
      >
        Resultado: {resultado}
      </Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Ingresa el primer numero'
        value={numero1}
        onChangeText={setNumero1}
      />
      
      <TextInput
      style= {styles.input}
      keyboardType='numeric'
      placeholder='Ingrese el segundo numero'
      value={numero2}
      onChangeText={setNumero2}
      />
      
        <View 
          style = {styles.imagenes}
        >
        <TouchableOpacity
          onPress={sumarNumeros}
        >
        <Image 
          style = {styles.operatorImage}
          source = {{uri: 'https://cdn.pixabay.com/photo/2013/07/12/17/55/plus-152614_1280.png'}}/>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={restarNumeros}>
          <Image
            style={styles.operatorImage}
            source={{uri: 'https://images.icon-icons.com/1144/PNG/512/subtractsign_80955.png'}}
          />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={multiplicarNumeros}>
          <Image
            style={styles.operatorImage}
            source={{uri: 'https://signoswiki.com/wp-content/uploads/signo-de-multiplicacion.png'}}
          />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={dividirNumeros}>
          <Image
            style={styles.operatorImage}
            source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NMap1NZp254kyo_aVR4nCwHaJl%26pid%3DApi&f=1&ipt=cf47f36b340f6d2089f68a9d240fca6a0c3cdbc5c45be8c73a10d2f8545739ba'}}
          />
        </TouchableOpacity>
        </View>
        
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 20
  },
  header: {
    fontSize: 28,
    marginBottom: 20,
    color: 'blue',
    fontWeight: 'bold'
  },
  input:{
    fontSize: 20,
    width: 50,
    paddingTop: 20,
    borderStyle: 'solid',
  },
  operatorImage: {
    width: 50,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 100
  },
  imagenes: {
    width: 100,
    justifyContent: 'space-evenly'
  },
  resultado: {
    
  }
});
