import React from "react"
import {  StyleSheet, View } from "react-native"
import { HStack, Stack, Center, NativeBaseProvider ,Wrap, Heading,Image, Container, Box} from "native-base"
import { colors,sizes } from "../../../Constants/Theme"
import { ScrollView } from "react-native-gesture-handler"
export const SlideScreen =()=>{
  return (

  <ScrollView>
          <Stack space={3} alignItems="center" marginTop='35%'>
            
      <HStack space={3} alignItems="center">
        <Center
          size={sizes.size1}
          bg={colors.Box2}
          rounded="lg"
          _text={{
            color: "white",
          }}
          shadow={3}
        >
          Box 1
        </Center>
        <Center
          size={sizes.size1}
          bg={colors.Box2}
          rounded="lg"
          _text={{
            color: "white",
          }}
          shadow={3}
        >
          Box 1
        </Center>
        <Center
          size={sizes.size1}
          bg={colors.Box2}
          rounded="lg"
          _text={{
            color: "white",
          }}
          shadow={3}
        >
          Box 1
        </Center>
        <Center
          size={sizes.size1}
          bg={colors.Box2}
          rounded="lg"
          _text={{
            color: "white",
          }}
          shadow={3}
        >
          Box 1
        </Center>
</HStack>
    </Stack>

    </ScrollView>
     
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      
      <SlideScreen />  
         
    </NativeBaseProvider>
  )
}

  
  