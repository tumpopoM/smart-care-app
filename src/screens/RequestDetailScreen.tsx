import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { styles } from '../theme/styles';

type RouteProps = RouteProp<RootStackParamList, 'RequestDetail'>;

export default function RequestDetailScreen() {
  const route = useRoute<RouteProps>();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>ID: {item.id}</Text>
      </View>
      <View style={styles.section}>
        <Text>{item.title}</Text>
      </View>
      <View style={styles.section}>
        <Text>{item.description}</Text>
      </View>
      <Text>Create Date: {new Date(item.createdAt).toLocaleString()}</Text>
    </View>
  );
}
