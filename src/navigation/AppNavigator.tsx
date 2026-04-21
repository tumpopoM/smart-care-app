import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

const PlaceholderScreen = ({ title }: { title: string }) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'yellow',
    }}
  >
    <Text style={{ fontSize: 24 }}>{title}</Text>
  </View>
);

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login">
          {() => <PlaceholderScreen title="Login Screen" />}
        </Stack.Screen>
        <Stack.Screen name="Main">
          {() => <PlaceholderScreen title="Main Screen" />}
        </Stack.Screen>
        <Stack.Screen name="AddRequest">
          {() => <PlaceholderScreen title="Add Request Screen" />}
        </Stack.Screen>
        <Stack.Screen name="RequestDetail">
          {() => <PlaceholderScreen title="Request Detail Screen" />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
