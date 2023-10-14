import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/Login';
import Forms from '../Screens/Forms';
import Consumo from '../Screens/Consumo';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Forms" component={Forms} />
      <Stack.Screen name="Consumo" component={Consumo} />
    </Stack.Navigator>
  );
}

export default function StackNavigator(){
    return(
        <NavigationContainer><MyStack/></NavigationContainer>
    )
}