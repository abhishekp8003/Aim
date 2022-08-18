import React,{useState,useEffect} from 'react'
import { Button,VStack, Center, Heading, NativeBaseProvider } from "native-base"
import firebase from 'firebase';
import 'firebase/auth';
import { Alert, View } from "react-native";
import { loggingOut } from '../../../Api/Firebasemethods'
import { SlideScreen } from "../components/SlideScreen";
import { BoxScreen} from '../components/BoxScreen';
export default function Dashboard({ navigation }) {
  const handlePress = () => {
    loggingOut();
    navigation.replace('signIn');
  };
<View>
  <SlideScreen/>
  <BoxScreen/>
</View>

  return (
    <NativeBaseProvider>
    <VStack>
      <Button onPress={handlePress}>
       
        Logout
      </Button>
      </VStack>
      </NativeBaseProvider>
  )
}
