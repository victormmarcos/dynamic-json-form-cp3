import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FormConfig, FormErrors, FormValue, FormValues } from '../types/form';
import { DynamicField } from './DynamicField';
import { ResultCard } from './ResultCard';

interface DynamicFormProps {
  config: FormConfig;
  values: FormValues;
  errors: FormErrors;
  submittedData: FormValues | null;
  onChange: (fieldId: string, value: FormValue) => void;
  onSubmit: () => Promise<void>;
  onClear: () => Promise<void>;
}

export const DynamicForm = ({
  config,
  values,
  errors,
  submittedData,
  onChange,
  onSubmit,
  onClear,
}: DynamicFormProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{config.title}</Text>
      <Text style={styles.subtitle}>Formulário renderizado dinamicamente a partir de JSON.</Text>

      <View style={styles.form}>
        {config.fields.map((field) => (
          <DynamicField
            key={field.id}
            field={field}
            value={values[field.id]}
            error={errors[field.id]}
            onChange={onChange}
          />
        ))}
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.primaryButton} onPress={() => void onSubmit()}>
          <Text style={styles.primaryButtonText}>Salvar formulário</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton} onPress={() => void onClear()}>
          <Text style={styles.secondaryButtonText}>Limpar dados</Text>
        </Pressable>
      </View>

      {submittedData ? <ResultCard data={submittedData} config={config} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 22,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  title: {
    color: '#111827',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    color: '#6b7280',
    fontSize: 15,
    marginBottom: 24,
  },
  form: {
    width: '100%',
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 4,
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 13,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 13,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  secondaryButtonText: {
    color: '#374151',
    fontSize: 15,
    fontWeight: '700',
  },
});
