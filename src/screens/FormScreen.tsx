import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export const FormScreen = () => {
    // const [nombre, setNombre] = useState('Nombre')
    // const [apellido, setApellido] = useState('Apellido')
    // const [form, setForm] = useState({
    //     nombre: '',
    //     apellido: ''
    // })

    return (
        <View
            style={styles.container}
        >
            <TextInput />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})