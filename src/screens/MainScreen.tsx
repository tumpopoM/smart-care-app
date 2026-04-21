import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigation } from '@react-navigation/native';

export default function MainScreen() {
  const navigation = useNavigation();
  const list = useSelector((state: RootState) => state.smartCare.list);

  const [searchId, setSearchId] = useState('');

  const handleSearch = () => {
    const found = list.find(item => item.id === searchId);

    if (found) {
      navigation.navigate('RequestDetail' as never, { item: found } as never);
    } else {
      alert('ไม่พบ Smart Care ID');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Main Screen</Text>

      {/* Search */}
      <TextInput
        placeholder="Search by ID"
        value={searchId}
        onChangeText={setSearchId}
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />
      <Button title="Search" onPress={handleSearch} />

      {/* Add Button */}
      <Button
        title="Add Request"
        onPress={() => navigation.navigate('AddRequest' as never)}
      />

      {/* List */}
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RequestDetail' as never, { item } as never)
            }
            style={{ padding: 10, borderBottomWidth: 1 }}
          >
            <Text>{item.id}</Text>
            <Text numberOfLines={1}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
