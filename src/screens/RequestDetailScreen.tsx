import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type ParamType = {
  RequestDetail: {
    item: {
      id: string;
      title: string;
      description: string;
      createdAt: number;
    };
  };
};

export default function RequestDetailScreen() {
  const route = useRoute<RouteProp<ParamType, 'RequestDetail'>>();
  const { item } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>ID: {item.id}</Text>
      <Text>Title: {item.title}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Created At: {new Date(item.createdAt).toLocaleString()}</Text>
    </View>
  );
}
