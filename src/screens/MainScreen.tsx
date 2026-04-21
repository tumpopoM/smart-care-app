import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { styles } from '../theme/styles';
import Icon from 'react-native-vector-icons/Ionicons';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

export default function MainScreen() {
  const list = useSelector((state: RootState) => state.smartCare.list);
  const navigation = useNavigation<NavigationProp>();

  const [searchId, setSearchId] = useState('');

  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!searchId.trim()) return;

    const found = list.find(item => item.id === searchId);

    if (found) {
      setError('');
      navigation.navigate('RequestDetail', { item: found });
    } else {
      setError('ไม่พบ Smart Care ID');
    }
  };

  return (
    <View style={[styles.container, { justifyContent: 'center' }]}>
      {/* Search */}
      <View style={{ position: 'relative' }}>
        <TextInput
          placeholder="Search by ID"
          value={searchId}
          onChangeText={text => {
            setSearchId(text);
            setError('');
          }}
          style={[styles.input, { paddingRight: 45 }]}
        />

        <TouchableOpacity onPress={handleSearch} style={styles.iconSearch}>
          <Icon name="search-outline" size={20} color="#333" />
        </TouchableOpacity>
      </View>

      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}

      {/* Add Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => {
          console.log('ADD CLICK');
          navigation.navigate('AddRequest');
        }}
      >
        <Text style={styles.buttonText}>+ Add Request</Text>
      </TouchableOpacity>

      {/* List */}
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('RequestDetail', { item })}
          >
            <Text numberOfLines={1} style={styles.itemTitle}>
              {item.title}
            </Text>
            <Text numberOfLines={1} style={styles.itemDescription}>
              {item.description}
            </Text>
            <Text style={styles.itemId}>ID: {item.id}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
