import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  multiline?: boolean;
  keyboardType?: any;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  onSubmitEditing?: () => void;
  loading?: boolean;
};

export default function CustomInput({
  value,
  onChangeText,
  placeholder,
  isFocused,
  onFocus,
  onBlur,
  multiline = false,
  keyboardType,
  rightIcon,
  onRightIconPress,
  onSubmitEditing,
  loading,
}: Props) {
  return (
    <View style={{ position: 'relative' }}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        multiline={multiline}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
        returnKeyType="search"
        style={[
          styles.input,
          multiline ? styles.textArea : null,
          isFocused ? styles.inputFocused : null,
          rightIcon ? { paddingRight: 45 } : null,
        ]}
      />

      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress} style={styles.iconSearch}>
          {loading ? (
            <ActivityIndicator size="small" color="#333" />
          ) : value ? (
            <Text>❌</Text>
          ) : (
            rightIcon
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  inputFocused: {
    borderColor: '#2F80ED',
  },
  iconSearch: {
    position: 'absolute',
    right: 12,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
