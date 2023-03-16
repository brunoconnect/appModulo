import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function App() {

  function handleModulo(){
    console.log('Acessando...')
  }

  
  return (
    <View style={styles.container}>
      <Text style={styles.textPrincipal}>App Modulo Nativo</Text>

      <TouchableOpacity style={styles.areaButton} onPress={handleModulo}>
        <Text style={styles.textButton}>Acessar Modulo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textPrincipal: {
    fontSize: 25
  },
  areaButton: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#1273f2'
  },
  textButton: {
    fontSize: 20,
    color: '#FFF'
  }
})

