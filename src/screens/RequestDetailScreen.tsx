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
      <View style={styles.card}>
        <Text style={styles.id}>ID: {item.id}</Text>

        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.description}>{item.description}</Text>

        <Text style={styles.date}>
          Created At: {new Date(item.createdAt).toLocaleString()}
        </Text>
      </View>
    </View>
  );
}
