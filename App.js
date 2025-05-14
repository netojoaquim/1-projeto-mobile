import React, { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Avatar, Text, Input } from "react-native-elements";
import { Button, ListItem } from "@rneui/themed";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { app, analytics } from './Banco.js';

import Cadastro from "./screens/Cadastro.jsx";
import Login from "./screens/Login.jsx";
import Redefinir from "./screens/Redefinir.jsx";
import Lista from "./screens/Lista.jsx";
import Contato from "./screens/Contato.jsx";
import Alteracontato from "./screens/Alteracontato.jsx";





const Stack = createStackNavigator();






export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerTitleAlign: 'center', title: 'Usuário' }} />
        <Stack.Screen name="Redefinir" component={Redefinir} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name="Lista" component={Lista} options={{ headerTitleAlign: 'center', title: 'Lista de Contatos' }} />
        <Stack.Screen name="Contato" component={Contato} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name="Alteracontato" component={Alteracontato} options={{ headerTitleAlign: 'center', title: '  Contato' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}