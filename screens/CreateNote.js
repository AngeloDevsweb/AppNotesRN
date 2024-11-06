import { Text, View, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native'
import { createNoteStyle } from '../styles/CreateNoteStyle'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function CreateNote({navigation}){

  const [titulo, setTitulo] = useState('')
  const [descorta, setDescorta] = useState('')
  const [fecha, setFecha] = useState('')
  const [descripcion, setDescripcion] = useState('')

  // Función para guardar una nueva nota en AsyncStorage
  const saveNote = async () => {
    try {
      const newNote = {
        id: Date.now().toString(), // Genera un ID único para cada nota
        titulo,
        descorta,
        fecha,
        descripcion,
      }

      // Recuperar notas guardadas anteriormente
      const storedNotes = await AsyncStorage.getItem('notas')
      const notes = storedNotes ? JSON.parse(storedNotes) : []

      // Agregar la nueva nota al arreglo de notas y guardarlo en AsyncStorage
      notes.push(newNote)
      await AsyncStorage.setItem('notas', JSON.stringify(notes))

      // Limpiar los campos después de guardar
      setTitulo('')
      setDescorta('')
      setFecha('')
      setDescripcion('')

      Alert.alert('Nota guardada', 'Tu nota se ha guardado exitosamente.')
      navigation.navigate('Home')
    } catch (error) {
      console.error('Error al guardar la nota:', error)
      Alert.alert('Error', 'No se pudo guardar la nota.')
    }
  }

    return (
      <ScrollView contentContainerStyle={createNoteStyle.scrollContainer}>
      <View style={createNoteStyle.main}>
        <Text style={createNoteStyle.title}>CREAR NOTA</Text>

        <View style={createNoteStyle.card}>
          <TextInput
            style={createNoteStyle.input}
            placeholder="Titulo"
            placeholderTextColor="slategray"
            value={titulo}
            onChangeText={setTitulo}
          />
          <TextInput
            style={createNoteStyle.input}
            placeholder="Descripcion corta"
            placeholderTextColor="slategray"
            value={descorta}
            onChangeText={setDescorta}
          />
          <TextInput
            style={createNoteStyle.input}
            placeholder="Fecha"
            placeholderTextColor="slategray"
            value={fecha}
            onChangeText={setFecha}
          />
          <TextInput
            style={createNoteStyle.input}
            placeholder="Descripcion"
            placeholderTextColor="slategray"
            value={descripcion}
            onChangeText={setDescripcion}
          />

          <TouchableOpacity style={createNoteStyle.button} onPress={saveNote}>
            <Text style={createNoteStyle.buttonText}>Registrar Nota</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    )
}
