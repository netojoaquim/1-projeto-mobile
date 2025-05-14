import React, { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Avatar, Text, Input } from "react-native-elements";
import { Button, ListItem } from "@rneui/themed";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { app, analytics } from '../Banco.js';

const Alteracontato = () => {
  const route = useRoute()
  const { name: initialName, number: initialNumber, mail: initialMail } = route.params;

  const [name, setName] = useState(initialName);
  const [number, setNumber] = useState(initialNumber);
  const [mail, setMail] = useState(initialMail);


  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome</Text>
        <Input
          value={name}
          onChangeText={setName}
          containerStyle={styles.emailContainer}
        />

        <Text style={styles.label}>Email</Text>
        <Input
          value={mail}
          onChangeText={setMail}
          containerStyle={styles.emailContainer}
        />

        <Text style={styles.label}>Telefone</Text>
        <Input
          value={number}
          onChangeText={setNumber}
          containerStyle={styles.senhaContainer}
        />
      </View>
      <View style={styles.ButtomContainer}>
        <Button
          buttonStyle={{
            marginBottom: 20,
          }}
        >
          Alterar
        </Button>
        <Button
          buttonStyle={{
            marginBottom: 20,
            backgroundColor: "red",
          }}
        >
          Excluir
        </Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  formContainer: {
    width: "60%",
    marginTop: "20%",
  },
  emailContainer: {
    marginBottom: 10,
  },
  senhaContainer: {
    marginBottom: 10,
  },
  cpfContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ButtomContainer: {
    width: "40%"
  },
  item: {
    backgroundColor: "#ffff",
    padding: 5,
    marginBottom: 8,

  },
  title: {
    fontSize: 25,
  },
});
export default Alteracontato;