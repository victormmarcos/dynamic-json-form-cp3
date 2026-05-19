import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DynamicForm } from '../components/DynamicForm';
import { formConfig } from '../config/formConfig';
import { useStoredForm } from '../hooks/useStoredForm';

export const HomeScreen = () => {
  const {
    values,
    errors,
    submittedData,
    updateValue,
    submitForm,
    clearData,
  } = useStoredForm(formConfig);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.heading}>Formulário CP3</Text>
        <Text style={styles.description}>
          Campos, validações e dados são controlados a partir de uma configuração JSON.
        </Text>
      </View>

      <DynamicForm
        config={formConfig}
        values={values}
        errors={errors}
        submittedData={submittedData}
        onChange={updateValue}
        onSubmit={submitForm}
        onClear={clearData}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 36,
  },
  header: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
    marginBottom: 18,
  },
  heading: {
    color: '#111827',
    fontSize: 30,
    fontWeight: '800',
  },
  description: {
    color: '#6b7280',
    fontSize: 16,
    marginTop: 8,
  },
});