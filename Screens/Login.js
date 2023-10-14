import { View, Text, Button, TextInput } from "react-native";
import react, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../Components/Config'

export default function Login({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function login() {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigation.navigate('Forms')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Ingrese su correo" onChangeText={(text) => setemail(text)} />
      <TextInput placeholder="Ingrese su contraseña" onChangeText={(text) => setpassword(text)} />
      <Button title='Ingresar' onPress={login} />
    </View>
  );
}