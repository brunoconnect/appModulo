import { View, Text, StyleSheet, TouchableOpacity, NativeModules } from 'react-native';

const { CalendarModule } = NativeModules;

console.log(CalendarModule)


export default function App() {

  const handleModulo = async () => {
    console.log('Acessando...')
    console.log({ NativeModules })
    // CalendarModule.createCalendarEvent("Bruno staine", "Brasilia", (err: any, eventId: any) => {
    //   if (err) {
    //     console.error(`Error found! ${err}`);
    //   }

    //   console.log(`Criando um novo evento com a credencial id: ${eventId}`);
    // });

    try {
      const eventId = await CalendarModule.createCalendarEvent(
        'Festa',
        'Minha casa',
      );
      console.log(`Criado um novo evento de id ${eventId}`);
    } catch (e) {
      console.error(e);
    }
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

