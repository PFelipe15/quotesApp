import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirsthPage from "./pages/FirsthPage";
import SecondPage from "./pages/SecondPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserProvider from "./ContextUser/UserContext";
import HomePage from "./pages/HomePage";
import MyQuotesPage from "./pages/MyQuotesPage";
import CreateQuotePage from "./pages/CreateQuotePage";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator initialRouteName="FirsthPage">
          <Stack.Screen
            name="FirsthPage"
            component={FirsthPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SecondPage"
            component={SecondPage}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="HomeTabs"
            component={TabScreens}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
};

function TabScreens() {
  return (
    <Tab.Navigator
    initialRouteName="HomePage" backBehavior="initialRoute"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "rgba(0, 0, 0, 0.4);",
          position: "absolute",
          borderTopWidth: 0,
          elevation: 0,
          height: 80,
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#fff",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="MyQuotes"
        component={MyQuotesPage}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted-square"
              size={55}
              color="#fff"
            />
          ),

          headerShown: false,
        }}
      />
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={65} color="#fff" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CreateQuote"
        component={CreateQuotePage}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="plus" size={65} color="#fff" />
          ),

          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export { Routes, TabScreens };
