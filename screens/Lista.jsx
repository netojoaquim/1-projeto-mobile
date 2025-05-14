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


const DATA = [
  {
    id: '1',
    name: 'joao cleber',
    number: "81996887511",
    mail: "joao@gmail.com",
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg'
  },
  {
    id: '2',
    name: 'ana adalia',
    number: "81996887511",
    mail: "ana@gmail.com",
    avatar: 'https://randomuser.me/api/portraits/women/42.jpg'
  },
  {
    id: '3',
    name: 'maria shopie',
    number: "81996887511",
    mail: "maria@gmail.com",
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
];


const Lista = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          size={"large"}
          name="add-circle"
          onPress={() => navigation.navigate("Contato")}
        />
      ),
    });
  }, [navigation]);

  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ListItem
          bottomDivider
          onPress={() => navigation.navigate("Alteracontato", {
            name: item.name,
            number: item.number,
            mail: item.mail,
            avatar: item.avatar,
            id: item.id
          })}
        >
          <Avatar source={{ uri: item.avatar }} />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.number}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      )}
    />
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

export default Lista ;