import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
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

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    dispatch(addRequest(data));
    navigation.goBack();
  };

  return (
    <View style={[styles.container]}>
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Title"
            value={value}
            onChangeText={onChange}
            style={styles.input}
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
            style={styles.textArea}
            multiline
            numberOfLines={4}
          />
        )}
      />
      {errors.description && (
        <Text style={styles.errorMessage}>{errors.description.message}</Text>
      )}

      <TouchableOpacity
        style={[styles.floatingButton, !isValid && styles.buttonDisabled]}
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
