import { Text, View, ScrollView } from 'react-native'
import {detailnoteStyle} from '../styles/DetailNoteStyle'
import {useRoute} from '@react-navigation/native'

export default function DetailNote(){
  const route = useRoute()
  const {note} = route.params;

    return (
      <ScrollView contentContainerStyle={detailnoteStyle.scrollContainer}>
        <View style={detailnoteStyle.card}>
          <Text style={detailnoteStyle.title}>NOTA</Text>
          <Text style={detailnoteStyle.titulo}>{note.titulo}</Text>
          <Text style={detailnoteStyle.fecha}>{note.fecha}</Text>
          <Text style={detailnoteStyle.descripcion}>{note.descripcion}</Text>
        </View>
      </ScrollView>
    )
}
