import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { styles } from '../theme/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomInput from '../components/CustomInput';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

export default function MainScreen() {
  const list = useSelector((state: RootState) => state.smartCare.list);
  const navigation = useNavigation<NavigationProp>();
  const [searchId, setSearchId] = useState('');
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (loading) return;

    if (!searchId.trim()) return;

    setLoading(true);

    setTimeout(() => {
      const found = list.find(item => item.id === searchId);

      if (found) {
        setError('');
        navigation.navigate('RequestDetail', { item: found });
      } else {
        setError('ไม่พบ Smart Care ID');
      }

      setLoading(false);
    }, 500);
  };

  return (
    <View style={[styles.container, { justifyContent: 'center' }]}>
      {/* Search */}
      <CustomInput
        value={searchId}
        onChangeText={text => {
          setSearchId(text);
          setError('');
        }}
        placeholder="Search by ID"
        isFocused={focusedField === 'search'}
        onFocus={() => setFocusedField('search')}
        onBlur={() => setFocusedField(null)}
        rightIcon={<Icon name="search-outline" size={20} color="#333" />}
        onRightIconPress={() => {
          if (searchId) {
            setSearchId('');
          } else {
            handleSearch();
          }
        }}
        onSubmitEditing={handleSearch}
        loading={loading}
      />

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
        contentContainerStyle={{
          paddingBottom: 100 + insets.bottom,
        }}
      />
    </View>
  );
}
