import { Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native'
import {detailnoteStyle} from '../styles/DetailNoteStyle'
import {useRoute} from '@react-navigation/native'
import { Icon } from '@rneui/themed';

export default function DetailNote(){
  const route = useRoute()
  const {note} = route.params;

  const deleteNote = ()=>{
    Alert.alert('IMPORTANTE', 'Estas seguro deseas eliminar esta nota?')
  }

    return (
      <ScrollView contentContainerStyle={detailnoteStyle.scrollContainer}>
        <View style={detailnoteStyle.card}>
          <Text style={detailnoteStyle.title}>NOTA</Text>
          <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
            <Text style={detailnoteStyle.titulo}>{note.titulo}</Text>
            <TouchableOpacity style={{marginTop:25}} onPress={deleteNote}>
              <Icon name='trash' type='ionicon' color='#FB4E4E' />
            </TouchableOpacity>
          </View>
          <Text style={detailnoteStyle.fecha}>{note.fecha}</Text>
          <Text style={detailnoteStyle.descripcion}>{note.descripcion}</Text>
        </View>
      </ScrollView>
    )
}
