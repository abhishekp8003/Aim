import { signInAsync } from 'expo-google-sign-in';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {Alert} from 'react-native';

export async function registration(email, password, lastName, firstName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection('users')
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        lastName: lastName,
        firstName: firstName,
      });
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

export async function signIn(email, password) {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}
// export async function signInWithGoogle() {
//   console.log("LoginScreen.js 6 | loggin in");
//   try {
//     const { type, user } = await Google.logInAsync({
//       // iosClientId: `<YOUR_IOS_CLIENT_ID>`,
//       androidClientId: `276608634998-50tsrv6o3a8hs9oke4l7ucgj9dgungen.apps.googleusercontent.com`,
//     });

//     if (type === "success") {
//       // Then you can use the Google REST API
//       console.log("LoginScreen.js 17 | success, navigating to profile");
//       navigation.navigate("DashBoard");
//     }
//   } catch (error) {
//     console.log("LoginScreen.js 19 | error with login", error);
//   }
//   if (result.type  === 'success') {
//     await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
//     const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
//     const googleProfileData = await firebase.auth().signInWithCredential(credential);
//     this.onLoginSuccess.bind(this);
//   }
// }
export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('sign In')
  }
}
