import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { addRequest } from '../store/smartCareSlice';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/styles';

const schema = z.object({
  title: z.string().min(1, 'กรุณากรอก title'),
  description: z.string().min(1, 'กรุณากรอก description'),
});

type FormData = {
  title: string;
  description: string;
};

export default function AddRequestScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(addRequest(data));
      setLoading(false);

      Alert.alert('สำเร็จ', 'สร้างรายการเรียบร้อยแล้ว', [
        {
          text: 'ตกลง',
          onPress: () => navigation.goBack(),
        },
      ]);
    }, 800);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container]}>
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Title"
                value={value}
                onChangeText={onChange}
                onFocus={() => setFocusedField('title')}
                onBlur={() => setFocusedField(null)}
                style={[
                  styles.input,
                  focusedField === 'title' && styles.inputFocused,
                ]}
              />
            )}
          />
          {errors.title && (
            <Text style={styles.errorMessage}>{errors.title.message}</Text>
          )}

          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Description"
                value={value}
                onChangeText={onChange}
                onFocus={() => setFocusedField('description')}
                onBlur={() => setFocusedField(null)}
                style={[
                  styles.textArea,
                  focusedField === 'description' && styles.inputFocused,
                ]}
                multiline
                numberOfLines={4}
              />
            )}
          />
          {errors.description && (
            <Text style={styles.errorMessage}>
              {errors.description.message}
            </Text>
          )}

          <TouchableOpacity
            style={[
              styles.floatingButton,
              (!isValid || loading) && styles.buttonDisabled,
            ]}
            onPress={handleSubmit(onSubmit)}
            disabled={!isValid || loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Submit</Text>
            )}
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
