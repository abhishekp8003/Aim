import React, {useState,useEffect} from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
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
import firebase from "firebase";
import {signInAsync, signInWithGoogle} from '../../../Api/Firebasemethods';
import * as Google from 'expo-google-app-auth';
import * as GoogleSignIn from 'expo-google-sign-in';
import { NavigationContainer } from "@react-navigation/native";
import { Alert } from "react-native";
import SignUp from "./signUp";
import ForgotPassword from "./ForgotPassword";
export default function SignIn({navigation}) {
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: `<YOUR_IOS_CLIENT_ID>`,
        androidClientId: `276608634998-50tsrv6o3a8hs9oke4l7ucgj9dgungen.apps.googleusercontent.com`,
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        navigation.navigate("Profile", { user });
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };
//   useEffect(
//     () => {
//      firebase.auth().onAuthStateChanged((user) => {
//        if (user) {
//          navigation.replace('DashBoard');
//        } else {
//          navigation.replace('sign In');
//        }
//      });
//    }
//  );
// navigation.reset({
//   index: 0,
//   routes: [{ name: 'DashBoard' }],
// });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    if (!email) {
      Alert.alert('Email field is required.');
    }

    if (!password) {
      Alert.alert('Password field is required.');
    }
    
    signIn(email, password);
    setEmail('');
    setPassword('');

  };
   
 return (
      <NativeBaseProvider>
      <Box
        flex={1}
        p={2}
        w="90%"
        mx='auto'
      >
        <Heading size="lg" color='primary.500'>
          Welcome
        </Heading>
        <Heading color="muted.400" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={2} mt={5}>
          <FormControl>
            <FormControl.Label _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
                Email ID
            </FormControl.Label>
            <Input 
            placeholder="E.g abc@protonmail.com"
            value={email}
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"/>
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label  _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
                Password
            </FormControl.Label>
            <Input         
            placeholder="Enter your password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true} />
            <Link
              _text={{ fontSize: 'xs', fontWeight: '700', color:'cyan.500' }}
              alignSelf="flex-end"
              mt={1}
              onPress={() =>navigation.navigate('ForgotPassword')}
            >
              Forget Password?
            </Link>
          </FormControl>
          <VStack  space={2}>
          <Button  
          onPress={handlePress} 
          colorScheme="cyan" _text={{color: 'white' }}>
         
              Login
          </Button >

<HStack justifyContent="center" alignItem='center'>
          {/* <IconButton
            variant='unstyled'
            startIcon={
              <Icon
                as={< MaterialCommunityIcons name="facebook" />}
                color='muted.700'
                size='sm'
              />
            }
          /> */}
          <IconButton
            
            variant='unstyled'
            startIcon={
              
              <Icon
                onPress={signInAsync}
                as={<Ionicons name="google" size={24} color="black" />}
                color='muted.700'
                size="sm"
              />
            }
          />
          {/* <IconButton
            variant='unstyled'
            startIcon={
              <Icon
                as={< MaterialCommunityIcons name="github" />}
                color='muted.700'
                size="sm"
              />
            }
          /> */}
          </HStack>
          </VStack>
          <HStack justifyContent="center">
            <Text fontSize='sm' color='muted.700' fontWeight={400}>I'm a new user. </Text>
            <Link  
             onPress={() =>navigation.navigate('sign Up')}
            _text={{ color: 'cyan.500', bold: true, fontSize: 'sm' }} >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
        }