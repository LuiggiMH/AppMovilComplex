import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useState } from "react";
import { db } from "../Components/Config";
import { ref, onValue } from "firebase/database";
import { StatusBar } from "expo-status-bar";

export default function Consumo() {
    const [cedula, setcedula] = useState("");
    const [nombre, setnombre] = useState("");
    const [ciudad, setciudad] = useState("");

    function leer() {
        const startCountRef = ref(db, 'usuarios/' + cedula);
        onValue(startCountRef, (snapshot) => {
            const data = snapshot.val();
            setcedula(data.cedula)
            setnombre(data.nombre)
            setciudad(data.ciudad)
        });
    }

    return (
        <View style={styles.container}>
            <Text>API DE CONSUMO</Text>
            <TextInput
                placeholder="Ingrese su cedula"
                value={cedula}
                onChangeText={(id) => {
                    setcedula(id)
                }}
            />
            <Button title="Consumir API" onPress={leer} />
            <StatusBar style="auto" />
            <Text>{cedula}</Text>
            <Text>{nombre}</Text>
            <Text>{ciudad}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });