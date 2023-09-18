import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  return (
    <View className="flex-1 py-10 items-center bg-slate-900">
      <Text className="text-4xl font-bold mb-4 text-white p-10">Welcome Back! </Text>
      <Text className = "text-s p-05 text-slate-300 py-10"> Please sign in to your account</Text>
      <TextInput
        placeholder="Email"
        className="border p-2 mb-4 w-4/5 rounded-lg text-slate-300 bg-slate-600  "
        keyboardType="Username"
      />
      <TextInput
        placeholder="Password"
        className="border p-2 mb-4 w-4/5 rounded-lg bg-slate-600 text-slate-400"
        secureTextEntry
      />
      
      <TouchableOpacity
        onPress={() => {}}
        className="bg-blue-500 p-2 rounded text-white"
      >
        <Text className= "text-slate-200">Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <Text className="text-blue-500 mt-4 text-left">Forgot Password?</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default LoginScreen;
