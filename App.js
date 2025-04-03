import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Text, Input } from "react-native-elements";
import { Button } from "@rneui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Avatar
        size="large"
        rounded
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
      />
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <Input placeholder="Email" containerStyle={styles.emailContainer} />
        <Text style={styles.label}>Senha</Text>
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          containerStyle={styles.senhaContainer}
        />
      </View>

      <View style={styles.ButtomContainer}>
        <Button
          buttonStyle={{
            marginBottom: 30,
          }}
        >
          Login
        </Button>
        <Button onPress={() => navigation.navigate("Cadastro")}>
          Cadastre-se
        </Button>
      </View>
      <Button type="clear" onPress={() => navigation.navigate("Redefinir")} buttonStyle={{
            marginTop: 50,
          }}>
        Esqueceu a senha?
      </Button>
    </View>
  );
};

const Cadastro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome</Text>
        <Input placeholder="Nome" containerStyle={styles.emailContainer} />
        <Text style={styles.label}>Email</Text>
        <Input placeholder="Email" containerStyle={styles.emailContainer} />
        <Text style={styles.label}>Senha</Text>
        <Input placeholder="Senha" containerStyle={styles.senhaContainer} />
      </View>

      <View style={styles.ButtomContainer}>
        <Button
          onPress={() => navigation.navigate("Login")}
          buttonStyle={{
            marginBottom: 20,
          }}
        >
          Cadastrar
        </Button>
      </View>
    </View>
  );
};
const Redefinir = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <Input placeholder="Email" containerStyle={styles.emailContainer} />
      </View>

      <View style={styles.ButtomContainer}>
        <Button
          onPress={() => {
            alert("Email enviado caso exista uma conta");
            navigation.navigate("Login");
          }}
          buttonStyle={{
            marginBottom: 20,
          }}
        >
          Enviar
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
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ButtomContainer: {
    width: "40%"
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Redefinir" component={Redefinir} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
