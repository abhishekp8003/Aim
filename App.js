import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider
} from 'native-base';
import signIn from './src/Screens/Auth/signIn';
import signUp from './src/Screens/Auth/signUp';
import Dashboard from "./src/Screens/Auth/DashBoard";
import ForgotPassword from "./src/Screens/Auth/ForgotPassword"
import firebase from "firebase";
import { firebaseConfig } from "./src/Screens/Firebase/Config";
import BoxScreen from "./src/Screens/components/BoxScreen";
import { SlideScreen } from "./src/Screens/components/SlideScreen";
import HomeScreen from "./src/Screens/components/HomeScreen";
import { TabNav } from "./src/Screens/components/TabNav";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="ignIn"  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="sign In" component={signIn} />
        <Stack.Screen name="sign Up" component={signUp} />
        <Stack.Screen name="BoxScreen" component={BoxScreen} />
        {/* <Stack.Screen name="DashBoard" component={DashBoard} /> */}
        {/* <Stack.Screen name='TabNav' component={TabNav}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  
  );
};
