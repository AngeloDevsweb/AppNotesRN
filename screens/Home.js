import { Text, View, TouchableOpacity } from 'react-native'
import {homeStyle} from '../styles/HomeStyle'

export default function Home({navigation}){
    return (
      <View style={homeStyle.main}>
        <Text style={homeStyle.title}> MIS NOTAS </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('CreateNote')} 
          style={homeStyle.buttonAdd} >
          <Text style={homeStyle.textButtonAdd}>
            Agregar Nota
          </Text>
        </TouchableOpacity>
      </View>
    )
}
