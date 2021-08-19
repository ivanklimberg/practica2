import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export const FormScreen = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [form, setForm] = useState({
      nombre: '',
      apellido: ''
  })

  return (
    <View style={styles.container}>
      <View>
      <TextInput
        style={styles.input}
        onChangeText={setNombre}
        value={nombre}
        placeholder="Nombre"
      />
      <TextInput
        style={styles.input}
        onChangeText={setApellido}
        value={apellido}
        placeholder="Apellido"
      />
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </View>
      </TouchableOpacity>
    </View>    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  button: {
    marginTop: 20,
    borderRadius: 20,
    padding: 15,
    width: 100,
    backgroundColor: "yellow"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#6c5dcf"
  }
});
