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
import VehicleDetailsUpdateScreen from './src/screens/VehicleDetailsUpdateScreen';

{/* Asiff */}
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import StartupRegistrationPage1 from './src/screens/StartupRegistrationPage1';
import StartupRegistrationPage2 from './src/screens/StartupRegistrationPage2';
import AddOfferScreen1 from './src/screens/AddOfffersScreen1';
import OffersHome from './src/screens/OffersHome';
import OfferDetails from './src/screens/OfferDetails';
import StartupInitialPage from './src/screens/StartupInitialPage';
import StartupProfile from './src/screens/StartupProfile';
import UpdateOffersScreen from './src/screens/UpdateOffersScreen';
import SellerScreen from './src/screens/SellerScreen';

import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import orderReducer from './src/features/order';

import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import Cart from './src/screens/Cart';
import Checkout from './src/screens/Checkout';

const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

function StartUpDashboard() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'OffersHome') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'StartupProfile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: [
          {
            
            display: 'flex',
         
            paddingTop:10
          },
          null
        ],
        tabBarActiveTintColor: COLORS.blue, // active icon color
        tabBarInactiveTintColor: 'gray', // inactive icon color
      })}>
      <Tab.Screen name="OffersHome" component={OffersHome}
       options={{
        headerShown: true,
        title: 'Offer Home',
        headerTitleAlign: 'center',
        headerPressColor: '#3A95C2',
        headerTitleStyle: {fontSize: 20,color:COLORS.blue},
        headerStyle:{borderBottomColor:COLORS.blue, borderBottomWidth:1},
      }} />
      
      <Tab.Screen name='StartupProfile' component={StartupProfile}
       options={{
        headerShown: true,
        title: 'Profile',
        headerTitleAlign: 'center',
        headerPressColor: '#3A95C2',
        headerTitleStyle: {fontSize: 20,color:COLORS.blue},
        headerStyle:{borderBottomColor:COLORS.blue, borderBottomWidth:1},
      }} />
    </Tab.Navigator>
  );

};

export default function App() {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Welcome'>
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
            <Stack.Screen name='VehicleDetailsUpdate' component={VehicleDetailsUpdateScreen} options={{title: 'Vehicle Details Update'}}/>

            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Checkout" component={Checkout} />

            {/* Asiff */}
            <Stack.Screen name='StartupRegistrationPage1' component={StartupRegistrationPage1} options={{title: 'Start up Registration', headerTitleAlign: 'center',}} />
            <Stack.Screen name='StartupRegistrationPage2' component={StartupRegistrationPage2} options={{title: 'Start up Registration', headerTitleAlign: 'center',}}/>
            <Stack.Screen name='AddOffersScreen1' component={AddOfferScreen1} options={{title: 'Add Deals', headerTitleAlign: 'center',}}/>
            <Stack.Screen name='OfferDetails' component={OfferDetails} options={{ headerShown: false }}/>
            <Stack.Screen name='StartupInitialPage' component={StartupInitialPage} options={{ headerShown: false }}/>
            <Stack.Screen name='SellerScreen' component={SellerScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='StartUpDashboard' component={StartUpDashboard} options={{ headerShown: false }}/>        
            <Stack.Screen name='UpdateOffersScreen' component={UpdateOffersScreen} options={{title: 'Update Offer', headerTitleAlign: 'center',}}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>

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
