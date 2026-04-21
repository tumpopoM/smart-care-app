import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/styles';

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

  const onSubmit = () => {
    navigation.navigate('Main' as never);
    setLoading(true);
    setTimeout(() => {
      navigation.navigate('Main' as never);
      setLoading(false);
    }, 800);
  };

  return (
    <View style={[styles.container, { justifyContent: 'center' }]}>
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="เลขบัตร / เบอร์โทร"
            value={value}
            onChangeText={onChange}
            style={[
              styles.input,
              focusedField === 'login' && styles.inputFocused,
            ]}
            keyboardType="numeric"
            onFocus={() => setFocusedField('login')}
            onBlur={() => setFocusedField(null)}
          />
        )}
      />

      {errors.username && (
        <Text style={styles.errorMessage}>{errors.username.message}</Text>
      )}

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={[styles.button, (!isValid || loading) && styles.buttonDisabled]}
      >
        {loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
