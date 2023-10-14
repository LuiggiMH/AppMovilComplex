import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { useState } from 'react';
import { db } from '../Components/Config';
import { ref, remove, set, update } from "firebase/database";

export default function Forms({ navigation }) {
    const [cedula, setcedula] = useState('')
    const [nombre, setnombre] = useState('')
    const [ciudad, setciudad] = useState('')


    function agregar() {
        set(ref(db, 'usuarios/' + cedula), {
            cedula: cedula,
            nombre: nombre,
            ciudad: ciudad,
        }).then(() => {
            Alert.alert('Registro Exitoso');
        })
            .catch((error) => {
                Alert.alert(error);
            })
    }

    function actualizar() {
        update(ref(db, 'usuarios/' + cedula), {
            cedula: cedula,
            nombre: nombre,
            ciudad: ciudad,
        });
    }

    function eliminar() {
        remove(ref(db, 'usuarios/' + cedula))
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>* * * REGISTRAR * * *</Text>
                <StatusBar style="auto" />
                <Text>Ingrese ID</Text>
                <TextInput
                    placeholder='cedula'
                    style={styles.input}
                    value={cedula}
                    onChangeText={(cedula) => setcedula(cedula)}
                />
                <Text>Ingrese Nombre</Text>
                <TextInput
                    placeholder='nombre'
                    style={styles.input}
                    value={nombre}
                    onChangeText={(nombre) => setnombre(nombre)}
                />
                <Text>Ciudad</Text>
                <TextInput
                    placeholder='ciudad'
                    style={styles.input}
                    value={ciudad}
                    onChangeText={(ciudad) => setciudad(ciudad)}
                />

                <Button title="Enviar" onPress={agregar} />
                <Text></Text>
                <Text>* * * EDITAR * * *</Text>
                <TextInput
                    placeholder='editar cedula'
                    value={cedula}
                    style={styles.input}
                    onChangeText={(cedula) => setcedula(cedula)}
                />
                <TextInput
                    placeholder='editar nombre'
                    value={nombre}
                    style={styles.input}
                    onChangeText={(nombre) => setnombre(nombre)}
                />
                <TextInput
                    placeholder='editar ciudad'
                    value={ciudad}
                    style={styles.input}
                    onChangeText={(ciudad) => setciudad(ciudad)}
                />
                <Button title='Editar' onPress={actualizar} />
                <Text></Text>
                <Text>* * * ELIMINAR * * *</Text>
                <TextInput
                    placeholder='eliminar'
                    style={styles.input}
                    value={cedula}
                    onChangeText={(cedula) => setcedula(cedula)}
                />
                <Button title='Eliminar' onPress={eliminar} />
                <Text></Text>
                <Text>* * * CONSUMO DE API * * *</Text>
                <Button title='Consumo de API' onPress={() => navigation.navigate('Consumo')} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 100,
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 20

    }
});