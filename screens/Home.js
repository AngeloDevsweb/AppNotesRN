import { Text, View, TouchableOpacity, FlatList, Alert,  } from 'react-native'
import {homeStyle} from '../styles/HomeStyle'
import {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Home({navigation}){
  const [notes, setNotes] = useState([])

  // Recupera las notas de AsyncStorage
  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem('notas')
      const parsedNotes = storedNotes ? JSON.parse(storedNotes) : []
      setNotes(parsedNotes)
    } catch (error) {
      console.error('Error al cargar notas:', error)
    }
  }

  // Cargar las notas al cargar el componente
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadNotes)
    return unsubscribe
  }, [navigation])

  // Renderizado de cada elemento de la nota
  const renderNote = ({ item }) => (
    <TouchableOpacity style={homeStyle.noteCard} 
    onPress={()=>navigation.navigate('DetailNote', {note:item})}>
        <View>
          <Text style={homeStyle.noteTitle}>{item.titulo}</Text>
          <Text style={homeStyle.noteDate}>{item.fecha}</Text>
          <Text style={homeStyle.noteShortDesc}>{item.descorta}</Text>
        </View>
    </TouchableOpacity>
  )

    return (
      <View style={homeStyle.main}>
        <Text style={homeStyle.title}> MIS NOTAS </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('CreateNote')} 
          style={homeStyle.buttonAdd} >
          <Text style={homeStyle.textButtonAdd}>
            Agregar Nota
          </Text>
        </TouchableOpacity>
        <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={renderNote}
        contentContainerStyle={homeStyle.listContainer}
      />
      </View>
    )
}
