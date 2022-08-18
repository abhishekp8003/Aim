import React, { Component } from 'react'
import { Text, View,StyleSheet, SafeAreaView} from 'react-native'
import {HStack, Stack, Center, NativeBaseProvider, Heading, Container } from "native-base"
import { BoxScreen } from "./BoxScreen";
import SlideScreen from './SlideScreen';
import { TabNav } from "./TabNav";



export class HomeScreen extends React.Component {
    render() {
        return (
 <SafeAreaView>
 
                     

  

                <SlideScreen/>
                
                <BoxScreen/>
                
                
                                  
                <TabNav/>
                </SafeAreaView>
        )
    }
}

export default () => {
    return (
      <NativeBaseProvider>
          <HomeScreen />
      </NativeBaseProvider>
    )
  }
  