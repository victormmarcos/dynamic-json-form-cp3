import { FormConfig, FormErrors, FormField, FormValue, FormValues } from '../types/form';

const isEmptyValue = (value: FormValue | undefined): boolean => {
  if (value === undefined) {
    return true;
  }

  if (typeof value === 'string') {
    return value.trim().length === 0;
  }

  if (typeof value === 'boolean') {
    return value === false;
  }

  return value.length === 0;
};

export const getInitialValueByField = (field: FormField): FormValue => {
  if (field.type === 'checkbox') {
    return [];
  }

  if (field.type === 'switch') {
    return false;
  }

  return '';
};

export const buildInitialValues = (config: FormConfig): FormValues => {
  return config.fields.reduce<FormValues>((accumulator, field) => {
    accumulator[field.id] = getInitialValueByField(field);
    return accumulator;
  }, {});
};

export const validateForm = (config: FormConfig, values: FormValues): FormErrors => {
  return config.fields.reduce<FormErrors>((errors, field) => {
    const value = values[field.id];

    if (field.required && isEmptyValue(value)) {
      errors[field.id] = `${field.label} é obrigatório.`;
      return errors;
    }

    if (field.type === 'email' && typeof value === 'string' && value.trim().length > 0) {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

      if (!isValidEmail) {
        errors[field.id] = 'Informe um e-mail válido.';
      }
    }

    if (field.type === 'number' && typeof value === 'string' && value.trim().length > 0) {
      const isValidNumber = !Number.isNaN(Number(value));

      if (!isValidNumber) {
        errors[field.id] = 'Informe um número válido.';
      }
    }

    if (field.type === 'date' && typeof value === 'string' && value.trim().length > 0) {
      const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(value);

      if (!isValidDate) {
        errors[field.id] = 'Informe a data no formato AAAA-MM-DD.';
      }
    }

    return errors;
  }, {});
};
