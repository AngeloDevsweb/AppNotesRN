import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { createNoteStyle } from '../styles/CreateNoteStyle'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function CreateNote(){

  const [titulo, setTitulo] = useState('')
  const [descorta, setDescorta] = useState('')
  const [fecha, setFecha] = useState('')
  const [descripcion, setDescripcion] = useState('')

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

          <TouchableOpacity style={createNoteStyle.button}>
            <Text style={createNoteStyle.buttonText}>Registrar Nota</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    )
}
