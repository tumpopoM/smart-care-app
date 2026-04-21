import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  username: z
    .string()
    .refine(
      val =>
        (val.length === 13 && /^\d+$/.test(val)) ||
        (val.length === 10 && /^\d+$/.test(val)),
      {
        message: 'ต้องเป็นเลขบัตร 13 หลัก หรือเบอร์โทร 10 หลัก',
      },
    ),
});

type FormData = {
  username: string;
};

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    console.log('LOGIN:', data);
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text>Login</Text>

      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="เลขบัตร / เบอร์โทร"
            value={value}
            onChangeText={onChange}
            style={{
              borderWidth: 1,
              marginVertical: 10,
              padding: 10,
            }}
            keyboardType="numeric"
          />
        )}
      />

      {errors.username && (
        <Text style={{ color: 'red' }}>{errors.username.message}</Text>
      )}

      <Button
        title="Submit"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
    </View>
  );
}
