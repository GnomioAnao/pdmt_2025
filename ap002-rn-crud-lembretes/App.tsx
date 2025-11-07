import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button, Pressable, FlatList, Linking } from 'react-native';

interface Lembrete{
  id: string;
  texto: string;
}

export default function App() {

  // vetor que contém, um estado com uma função
  //useState aqui é um hook
  const [lembrete, setLembrete] = useState<string>('')
  const [lembretes, setLembretes] = useState<Lembrete[]>([])

  const adicionar = () =>{
    const novoLembrete: Lembrete = {
      id: new Date().getTime().toString(),  
      texto: lembrete
    }

    setLembretes(lembreteAtual => [novoLembrete, ...lembreteAtual])
    setLembrete('')
  }
  
  const abrirGit = () => {
    Linking.openURL('https://www.github.com/')
  }

  const remover = (lembrete: Lembrete) => {
    // // Alert.alert(
    //   //titulos
    //   'Remover lmebrete',
    //   `Deseja remover esse lembrete? ${lembrete.texto}`,
    //   //lista de botões 
    //   [
    //     {
    //       text: 'Cancelar',
    //       style: 'cancel',
    //     },

    //     {
    //       text: 'Remover',
    //       style: 'destructive',
    //       onPress: () => {
    //         setLembretes((lembretesAtual) =>{
    //           return lembretesAtual.filter((l) => l.id !== lembrete.id)
    //         })
    //       }
    //     }
    //   ]
    // )

    setLembretes(lembretesAtual => lembretesAtual.filter(l => l.id !== lembrete.id))
  }

  

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        value={lembrete}
        onChangeText={setLembrete}
        placeholder='Digite um lebrete...'/>
        <Pressable
          onPress={adicionar} 
          style={styles.button}>
          <Text style={styles.buttonText} >Salvar</Text>  
        </Pressable> 
        <FlatList
          style={styles.list}
          keyExtractor={(l) => l.id}
          data={lembretes}
          ItemSeparatorComponent={() => <View style={{marginVertical: 4}}></View>}
          // ListFooterComponent={() => <FontAwesome name='github' size={40}/>}
          renderItem={(l) => {
            return (
              <View style={styles.listItem}>
                <Text
                  style={styles.listItemText}>
                  {l.item.texto}
                </Text>
                <Pressable
                  style={styles.listItemButtons}>
                  <FontAwesome name='pencil' size={24}/>
                </Pressable>
                <Pressable
                  onPress={() => remover(l.item)}>
                  <FontAwesome name='trash-o' size={24}/>
                </Pressable>
              </View>
            )
          }}/>
          <Pressable
            onPress={abrirGit}
            style={{borderWidth: 1, borderColor: '#eee', borderRadius: 4, width: '80%', alignItems: 'center', marginTop: 12}}>
            <FontAwesome name='github' size={40}/>
          </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 18
  },

  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    textAlign: 'center',
    borderRadius: 4,
    padding: 12
  },

  button: {
    width: '80%',
    backgroundColor: '#0096f3',
    padding: 12,
    borderRadius: 4
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  list: {
    marginTop: 12, 
    borderWidth: 1, 
    borderColor: '#DDD', 
    borderRadius: 8, 
    width:'80%',
    padding: 8
  },

  listItem:{
    padding: 12,
    borderBottomWidth: 1,
    borderBlockColor: '#EEE',
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },

  listItemText:{
    textAlign: 'center',
    width: '70%'
  },

  listItemButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '30%'
  }


});


// [
//   {
//     item: {
//       id: 1,
//       texto: 'abc'
//     }
//   },  
// ]