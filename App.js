import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View className = "flex-1 items-center justify-center bg-black">
      <Text className= " text-slate-300" >Hello! React Native.</Text>
      <StatusBar/>
    </View>
  );
}

