import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DriverAccountScreen from './src/screens/DriverAccountScreen';
import DriverProfileScreen from './src/screens/DriverProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import COLORS from './src/consts/colors';
import VehicleInformationScreen from './src/screens/VehicleInformationScreen';
import DriverInformationScreen from './src/screens/DriverInformationScreen';


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName='DriverAccount'>
            <Stack.Screen name='DriverAccount' component={DriverAccountScreen} options={{title: 'Driver Account'}}/>
            <Stack.Screen name='DriverProfile' component={DriverProfileScreen} options={{title: 'Driver Profile'}}/>

            <Stack.Screen name='VehicleInformation' component={VehicleInformationScreen} options={{title: 'Vehicle Account'}}/>
            <Stack.Screen name='DriverInformation' component={DriverInformationScreen} options={{title: 'Driver Info Account'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
