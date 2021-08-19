import React from 'react';
import {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export const FormScreen = () => {
  const [nombre, setNombre] = useState('Nombre');
  const [apellido, setApellido] = useState('Apellido');
  // const [form, setForm] = useState({
  //     nombre: '',
  //     apellido: ''
  // })

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setNombre}
        value={nombre}
        placeholder="Nombre"
      />
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setApellido}
        value={apellido}
        placeholder="Apellido"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
