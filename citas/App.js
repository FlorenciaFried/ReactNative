import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

const App = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Definir el state de citas
  const [citas, setCitas] = useState([]);

  // Elimina los pacientes del state
  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };

  // Muestra u oculta el Formulario
  const mostrarForm = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  // Ocultar el teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>

        <View>
          <TouchableHighlight
            onPress={() => mostrarForm()}
            style={styles.btnMostrarForm}>
            <Text style={styles.textoMostrarForm}>
              {!mostrarFormulario ? 'Crear Nueva Cita' : 'Cancelar Crear Cita'}
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.contenido}>
          {mostrarFormulario ? (
            <>
              <Text style={styles.titulo}>Crear Nueva Cita</Text>
              <Formulario
                citas={citas}
                setCitas={setCitas}
                setMostrarFormulario={setMostrarFormulario}
              />
            </>
          ) : (
            <>
              <Text style={styles.titulo}>
                {citas.length > 0
                  ? 'Administra tus Citas'
                  : 'No hay citas, agrega una'}
              </Text>

              <FlatList
                style={styles.listado}
                data={citas}
                renderItem={({item}) => (
                  <Cita cita={item} eliminarPaciente={eliminarPaciente} />
                )}
                keyExtractor={(cita) => cita.id}
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  titulo: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
  },
  textoMostrarForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;
