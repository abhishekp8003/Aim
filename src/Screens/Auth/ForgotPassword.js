import React,{useState} from 'react';
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
import { EmailValidator } from "../Helpers/EmailValidators";
import sendEmailWithPassword from '../../../Api/Firebasemethods'
// import { nativeViewProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
export default function ForgotPassword({ navigation }) {
  const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState({ value: '', type: '' })
  
    const sendResetPasswordEmail = async () => {
      const emailError = emailValidator(email.value)
      if (emailError) {
        setEmail({ ...email, error: emailError })
        return
      }
      setLoading(true)
      const response = await sendEmailWithPassword(email.value)
      if (response.error) {
        setToast({ type: 'error', message: response.error })
      } else {
        setToast({
          type: 'success',
          message: 'Email with password has been sent.',
        })
      }
      setLoading(false)
    }
      }
return(
   <NativeBaseProvider>
    <Text
        label="E-mail address"
        returnKeyType="done"
        // value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        // error={!!email.error}
        // errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
    <Button
    loading={loading}
    mode="contained"
    onPress={sendResetPasswordEmail}
    style={{ marginTop: 16 }}>
      send instructions
    </Button>
      </NativeBaseProvider>
)}

  