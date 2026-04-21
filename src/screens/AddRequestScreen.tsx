import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { addRequest } from '../store/smartCareSlice';
import { useNavigation } from '@react-navigation/native';

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
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Add Request</Text>

      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Title"
            value={value}
            onChangeText={onChange}
            style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
          />
        )}
      />
      {errors.title && (
        <Text style={{ color: 'red' }}>{errors.title.message}</Text>
      )}

      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Description"
            value={value}
            onChangeText={onChange}
            style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
          />
        )}
      />
      {errors.description && (
        <Text style={{ color: 'red' }}>{errors.description.message}</Text>
      )}

      <Button
        title="Submit"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
    </View>
  );
}
