import React, { Component } from 'react'
import { View,StyleSheet, ImageBackground, SafeAreaViewBase } from 'react-native'
import { ScrollView,Box, Stack, Heading, Icon, Text,Center, HStack, Avatar, NativeBaseProvider, Container, Wrap, Slide } from 'native-base';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { colors,sizes } from '../../../Constants/Theme';
// import TabNav from './TabNav';
import { SlideScreen } from './SlideScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
  export const BoxScreen = () => {

     return ( 
                  <View>
                        {/* <LinearGradient
        colors={['#581c87','#a855f7','#fdf4ff']}
        style={ {position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '30%'}}
      />
                    <SlideScreen/> */}
<ScrollView >
             
  <Wrap style={styles.Container} >
  
  <Box bgColor={colors.white} p={6} rounded="xl" shadow={4} boxSize={sizes.size2} >
           
  <Stack space={3}>
    <Stack space={2}>
      <Heading
        size={sizes.size1}
        _light={{ color: colors.gray2 }}
        _dark={{ color: colors.gray3 }}
      >
        Dressing room
      </Heading>
    </Stack>
    <HStack
      justifyContent="space-between"
      alignItems="flex-end"
      flexShrink={1}
    >
      <Stack space={2}>
        <HStack space={2} alignItems="center" flexShrink={1}>
          <Icon
            name="grid"
            as={MaterialCommunityIcons}
            color={colors.gray2}
          />
          <Text
            flexShrink={1}
            fontWeight="medium"
            _light={{ color: colors.gray4 }}
            _dark={{ color: colors.gray5 }}
          >
            Task:Goals
          </Text>
        </HStack>
        <HStack space={2} alignItems="center">
          <Icon
            name="calendar"
            as={MaterialCommunityIcons}
            color={colors.gray2}
          />
          <Text
            _light={{ color: colors.gray4 }}
            _dark={{ color: colors.gray5 }}
            fontWeight="medium"
          >
            Date: 10.04.2021
          </Text>
        </HStack>
      </Stack>
      
    </HStack>
  </Stack>
  
</Box>
        
  
<Box bgColor={colors.white} p={6} rounded="xl" shadow={4} boxSize={sizes.size2} >
           
           <Stack space={3}>
             <Stack space={2}>
               <Heading
                 size={sizes.size1}
                 _light={{ color: colors.gray2 }}
                 _dark={{ color: colors.gray3 }}
               >
                 Dressing room
               </Heading>
             </Stack>
             <HStack
               justifyContent="space-between"
               alignItems="flex-end"
               flexShrink={1}
             >
               <Stack space={2}>
                 <HStack space={2} alignItems="center" flexShrink={1}>
                   <Icon
                     name="grid"
                     as={MaterialCommunityIcons}
                     color={colors.gray2}
                   />
                   <Text
                     flexShrink={1}
                     fontWeight="medium"
                     _light={{ color: colors.gray4 }}
                     _dark={{ color: colors.gray5 }}
                   >
                     Task:Goals
                   </Text>
                 </HStack>
                 <HStack space={2} alignItems="center">
                   <Icon
                     name="calendar"
                     as={MaterialCommunityIcons}
                     color={colors.gray2}
                   />
                   <Text
                     _light={{ color: colors.gray4 }}
                     _dark={{ color: colors.gray5 }}
                     fontWeight="medium"
                   >
                     Date: 10.04.2021
                   </Text>
                 </HStack>
               </Stack>
               
             </HStack>
           </Stack>
           
         </Box>
  
         <Box bgColor={colors.white} p={6} rounded="xl" shadow={4} boxSize={sizes.size2} >
           
           <Stack space={3}>
             <Stack space={2}>
               <Heading
                 size={sizes.size1}
                 _light={{ color: colors.gray2 }}
                 _dark={{ color: colors.gray3 }}
               >
                 Dressing room
               </Heading>
             </Stack>
             <HStack
               justifyContent="space-between"
               alignItems="flex-end"
               flexShrink={1}
             >
               <Stack space={2}>
                 <HStack space={2} alignItems="center" flexShrink={1}>
                   <Icon
                     name="grid"
                     as={MaterialCommunityIcons}
                     color={colors.gray2}
                   />
                   <Text
                     flexShrink={1}
                     fontWeight="medium"
                     _light={{ color: colors.gray4 }}
                     _dark={{ color: colors.gray5 }}
                   >
                     Task:Goals
                   </Text>
                 </HStack>
                 <HStack space={2} alignItems="center">
                   <Icon
                     name="calendar"
                     as={MaterialCommunityIcons}
                     color={colors.gray2}
                   />
                   <Text
                     _light={{ color: colors.gray4 }}
                     _dark={{ color: colors.gray5 }}
                     fontWeight="medium"
                   >
                     Date: 10.04.2021
                   </Text>
                 </HStack>
               </Stack>
               
             </HStack>
           </Stack>
           
         </Box>

  
         <Box bgColor={colors.white} p={6} rounded="xl" shadow={4} boxSize={sizes.size2} >
           
           <Stack space={3}>
             <Stack space={2}>
               <Heading
                 size={sizes.size1}
                 _light={{ color: colors.gray2 }}
                 _dark={{ color: colors.gray3 }}
               >
                 Dressing room
               </Heading>
             </Stack>
             <HStack
               justifyContent="space-between"
               alignItems="flex-end"
               flexShrink={1}
             >
               <Stack space={2}>
                 <HStack space={2} alignItems="center" flexShrink={1}>
                   <Icon
                     name="grid"
                     as={MaterialCommunityIcons}
                     color={colors.gray2}
                   />
                   <Text
                     flexShrink={1}
                     fontWeight="medium"
                     _light={{ color: colors.gray4 }}
                     _dark={{ color: colors.gray5 }}
                   >
                     Task:Goals
                   </Text>
                 </HStack>
                 <HStack space={2} alignItems="center">
                   <Icon
                     name="calendar"
                     as={MaterialCommunityIcons}
                     color={colors.gray2}
                   />
                   <Text
                     _light={{ color: colors.gray4 }}
                     _dark={{ color: colors.gray5 }}
                     fontWeight="medium"
                   >
                     Date: 10.04.2021
                   </Text>
                 </HStack>
               </Stack>
               
             </HStack>
           </Stack>
           
         </Box>
         



        
</Wrap>



</ScrollView>
{/* <TabNav/> */}
</View>
);
};

        
export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
      <BoxScreen />
      </Center>
    </NativeBaseProvider>
  )
}
const styles=StyleSheet.create({
  Container:{
    backgroundColor:colors.secondary,
    width:'100%',
    marginTop:'20',
    padding:5,
    flexDirection:'row',
    flexWrap:'wrap' ,
     justifyContent:'space-evenly',
    
  }
})
