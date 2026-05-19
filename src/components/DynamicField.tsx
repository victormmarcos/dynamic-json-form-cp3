import { Picker } from '@react-native-picker/picker';
import { Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { FieldOption, FormField, FormValue } from '../types/form';

interface DynamicFieldProps {
  field: FormField;
  value: FormValue;
  error?: string;
  onChange: (fieldId: string, value: FormValue) => void;
}

export const DynamicField = ({ field, value, error, onChange }: DynamicFieldProps) => {
  const renderTextInput = (secureTextEntry: boolean, multiline: boolean) => (
    <TextInput
      style={[styles.input, multiline && styles.multilineInput, error && styles.inputError]}
      value={typeof value === 'string' ? value : ''}
      placeholder={field.placeholder}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      numberOfLines={multiline ? 4 : 1}
      keyboardType={field.type === 'number' ? 'numeric' : field.type === 'email' ? 'email-address' : 'default'}
      autoCapitalize={field.type === 'email' ? 'none' : 'sentences'}
      onChangeText={(text) => onChange(field.id, text)}
    />
  );

  const renderOptionButton = (option: FieldOption, selected: boolean, onPress: () => void) => (
    <Pressable
      key={option.value}
      style={[styles.optionButton, selected && styles.optionButtonSelected]}
      onPress={onPress}
    >
      <View style={[styles.optionIndicator, selected && styles.optionIndicatorSelected]} />
      <Text style={styles.optionLabel}>{option.label}</Text>
    </Pressable>
  );

  const renderField = () => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'number':
      case 'date':
        return renderTextInput(false, false);

      case 'password':
        return renderTextInput(true, false);

      case 'multiline':
      case 'textarea':
        return renderTextInput(false, true);

      case 'select':
      case 'combo':
        return (
          <View style={[styles.pickerWrapper, error && styles.inputError]}>
            <Picker
              selectedValue={typeof value === 'string' ? value : ''}
              onValueChange={(selectedValue: string) => onChange(field.id, selectedValue)}
            >
              {field.options.map((option) => (
                <Picker.Item key={option.value} label={option.label} value={option.value} />
              ))}
            </Picker>
          </View>
        );

      case 'radio':
        return (
          <View style={styles.optionsWrapper}>
            {field.options.map((option) =>
              renderOptionButton(option, value === option.value, () => onChange(field.id, option.value)),
            )}
          </View>
        );

      case 'checkbox': {
        const selectedValues = Array.isArray(value) ? value : [];

        return (
          <View style={styles.optionsWrapper}>
            {field.options.map((option) => {
              const selected = selectedValues.includes(option.value);

              return renderOptionButton(option, selected, () => {
                const nextValues = selected
                  ? selectedValues.filter((item) => item !== option.value)
                  : [...selectedValues, option.value];

                onChange(field.id, nextValues);
              });
            })}
          </View>
        );
      }

      case 'switch':
        return (
          <View style={styles.switchRow}>
            <Switch
              value={typeof value === 'boolean' ? value : false}
              onValueChange={(selectedValue) => onChange(field.id, selectedValue)}
            />
            <Text style={styles.switchText}>{typeof value === 'boolean' && value ? 'Sim' : 'Não'}</Text>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {field.label}
        {field.required ? <Text style={styles.required}> *</Text> : null}
      </Text>

      {renderField()}

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 18,
  },
  label: {
    color: '#111827',
    fontSize: 15,
    fontWeight: '600',
  },
  required: {
    color: '#dc2626',
  },
  input: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: '#dc2626',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  optionsWrapper: {
    gap: 8,
  },
  optionButton: {
    minHeight: 44,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  optionButtonSelected: {
    borderColor: '#2563eb',
    backgroundColor: '#eff6ff',
  },
  optionIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9ca3af',
  },
  optionIndicatorSelected: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  optionLabel: {
    color: '#111827',
    fontSize: 15,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  switchText: {
    color: '#374151',
    fontSize: 15,
  },
  errorText: {
    color: '#dc2626',
    fontSize: 13,
  },
});
