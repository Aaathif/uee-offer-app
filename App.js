import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DriverAccountScreen from './src/screens/DriverAccountScreen';
import DriverProfileScreen from './src/screens/DriverProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import COLORS from './src/consts/colors';
import VehicleInformationScreen from './src/screens/VehicleInformationScreen';
import DriverInformationScreen from './src/screens/DriverInformationScreen';
import VehicleDocumentScreen from './src/screens/VehicleDocumentScreen';
import VehicleImageScreen from './src/screens/VehicleImageScreen';
import BankPassbookScreen from './src/screens/BankPassbookScreen';
import ProfilePhotoScreen from './src/screens/ProfilePhotoScreen';
import RegistrationCertificateScreen from './src/screens/RegistrationCertificateScreen';
import RevenueCertificateScreen from './src/screens/RevenueCertificateScreen';
import VehicleInsuranceScreen from './src/screens/VehicleInsuranceScreen';
import InspectionReportScreen from './src/screens/InspectionReportScreen';
import ProofOfOwnership from './src/screens/ProofOfOwnership';
import DisplayInformation from './src/screens/DisplayInformation';
import ViewDriverDetailsScreen from './src/screens/ViewDriverDetailsScreen';
import ViewVehicleListScreen from './src/screens/ViewVehicleListScreen';
import ViewVehicleDetailsScreen from './src/screens/ViewVehicleDetailsScreen';


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName='DriverProfile'>
            <Stack.Screen name='DriverAccount' component={DriverAccountScreen} options={{title: 'Driver Account'}}/>
            <Stack.Screen name='DriverProfile' component={DriverProfileScreen} options={{title: 'Driver Profile'}}/>
            
            <Stack.Screen name='VehicleInformation' component={VehicleInformationScreen} options={{title: 'Vehicle Account'}}/>
            <Stack.Screen name='DriverInformation' component={DriverInformationScreen} options={{title: 'Driver Info Account'}}/>
            <Stack.Screen name='VehicleDocument' component={VehicleDocumentScreen} options={{title: 'Vehilce Document Account'}}/>
            <Stack.Screen name='VehicleImage' component={VehicleImageScreen} options={{title: 'Vehilce Image Account'}}/>

            <Stack.Screen name='BankPassbook' component={BankPassbookScreen} options={{title: 'Bank Details'}}/>
            <Stack.Screen name='ProfilePhoto' component={ProfilePhotoScreen} options={{title: 'Profile Image'}}/>
            <Stack.Screen name='RegistrationCertificate' component={RegistrationCertificateScreen} options={{title: 'Registration Certificate'}}/>
            <Stack.Screen name='RevenueCertificate' component={RevenueCertificateScreen} options={{title: 'Revenue Certificate'}}/>
            <Stack.Screen name='VehicleInsurance' component={VehicleInsuranceScreen} options={{title: 'Vehicle Insurance'}}/>
            <Stack.Screen name='InspectionReport' component={InspectionReportScreen} options={{title: 'Vehicle Inspection Report'}}/>
            <Stack.Screen name='ProofOfOwnership' component={ProofOfOwnership} options={{title: 'Proof Of Ownership'}}/>

            <Stack.Screen name='displayInformation' component={DisplayInformation} options={{title: 'Information'}}/>
            <Stack.Screen name='ViewDriverDetails' component={ViewDriverDetailsScreen} options={{title: 'Driver Details'}}/>
            <Stack.Screen name='ViewVehicleList' component={ViewVehicleListScreen} options={{title: 'Vehicle List'}}/>
            <Stack.Screen name='ViewVehicleDetails' component={ViewVehicleDetailsScreen} options={{title: 'Vehicle Details'}}/>
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
