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

const Contato = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome</Text>
        <Input placeholder="Nome" containerStyle={styles.emailContainer} />
        <Text style={styles.label}>Email</Text>
        <Input placeholder="Email" containerStyle={styles.emailContainer} />
        <Text style={styles.label}>Telefone</Text>
        <Input placeholder="Telefone" containerStyle={styles.senhaContainer} />
      </View>

      <View style={styles.ButtomContainer}>
        <Button
          onPress={() => navigation.navigate("Lista")}
          buttonStyle={{
            marginBottom: 20,
          }}
        >
          Salvar
        </Button>
      </View>
    </View>
  );
};

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
export default Contato;