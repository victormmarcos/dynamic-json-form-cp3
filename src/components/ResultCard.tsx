import { StyleSheet, Text, View } from 'react-native';
import { FormConfig, FormValue, FormValues } from '../types/form';

interface ResultCardProps {
  data: FormValues;
  config: FormConfig;
}

const formatValue = (
  fieldId: string,
  value: FormValue,
  config: FormConfig
): string => {
  const field = config.fields.find((item) => item.id === fieldId);

  if (field?.type === 'password') {
    return '••••••••';
  }

  if (Array.isArray(value)) {
    return value.length > 0 ? value.join(', ') : 'Nenhum';
  }

  if (typeof value === 'boolean') {
    return value ? 'Sim' : 'Não';
  }

  if (value === null || value === undefined || value === '') {
    return 'Não informado';
  }

  return String(value);
};

export const ResultCard = ({ data, config }: ResultCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado salvo</Text>

      {Object.entries(data).map(([key, value]) => (
        <View key={key} style={styles.row}>
          <Text style={styles.key}>{key}</Text>
          <Text style={styles.value}>{formatValue(key, value, config)}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    gap: 10,
  },
  title: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingBottom: 8,
  },
  key: {
    color: '#6b7280',
    fontSize: 13,
    fontWeight: '600',
  },
  value: {
    color: '#111827',
    fontSize: 15,
    marginTop: 2,
  },
});