import React,{useState,useEffect} from 'react';
import { AntDesign } from '@expo/vector-icons';
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
import { Alert } from 'react-native';
import { registration, } from '../../../Api/Firebasemethods'
import firebase from 'firebase';

export default function SignUp({ navigation }){ 
  useEffect(
    () => {
     firebase.auth().onAuthStateChanged((user) => {
       if (user) {
         navigation.replace('DashBoard');
       } else {
         navigation.replace('sign Up');
       }
     });
   }
 );
// navigation.reset({
//   index: 0,
//   routes: [{ name: 'DashBoard' }],
// });
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emptyState = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handlePress = () => {
    if (!firstName) {
      Alert.alert('First name is required');
    } else if (!email) {
      Alert.alert('Email field is required.');
    } else if (!password) {
      Alert.alert('Password field is required.');
    } else if (!confirmPassword) {
      setPassword('');
      Alert.alert('Confirm password field is required.');
    } else if (password !== confirmPassword) {
      Alert.alert('Password does not match!');
    } else {
      registration(
        email,
        password,
        lastName,
        firstName,
      );
      navigation.navigate('sing In');
      emptyState();
    }
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
          Sign up to continue!
        </Heading>

        <VStack space={2} mt={5}>
          <FormControl>
             <FormControl.Label>
               First Name
             </FormControl.Label>
             <Input 
             placeholder="First name*"
             value={firstName}
             onChangeText={(name) => setFirstName(name)}
            _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}/>
          </FormControl>
          <FormControl>
             <FormControl.Label>
               Last Name
             </FormControl.Label>
             <Input
             placeholder="Last name*"
             value={lastName}
             onChangeText={(name) => setLastName(name)}  
             _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>
                Email
            </FormControl.Label>
            <Input 
            _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}
            value={email}
            placeholder="Email-address"
            onChangeText={(email) => setEmail(email)}
            keyboardType="email-address"
            autoCapitalize="none"/>
          </FormControl>
          <FormControl>
            <FormControl.Label  
            _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
                Password
            </FormControl.Label>
            <Input type="password"
            placeholder="Enter your password *"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true} />
          </FormControl>
          <FormControl>
            <FormControl.Label  _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
               Confirm Password
            </FormControl.Label>
            <Input 
            type="password"
            placeholder="Retype your password to confirm*"
            value={confirmPassword}
            onChangeText={(password2) => setConfirmPassword(password2)}
            secureTextEntry={true} />
          </FormControl>
          <VStack  space={2}  mt={5}>
          <Button onPress={handlePress} 
          colorScheme="cyan" _text={{color: 'white' }}>
              SignUp
          </Button>

<HStack justifyContent="center" alignItem='center' >
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
                
                as={<AntDesign name="google" size={24} color="black" />}
                color='muted.700'
                size="sm"
              />
            }
          />
            
          
          </HStack>
          </VStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
          }