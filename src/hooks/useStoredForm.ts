import { useCallback, useEffect, useMemo, useState } from 'react';
import { clearFormData, getFormData, saveFormData } from '../services/storageService';
import { FormConfig, FormErrors, FormValue, FormValues } from '../types/form';
import { buildInitialValues, validateForm } from '../utils/formUtils';

interface UseStoredFormReturn {
  values: FormValues;
  errors: FormErrors;
  submittedData: FormValues | null;
  hasSubmittedData: boolean;
  updateValue: (fieldId: string, value: FormValue) => void;
  submitForm: () => Promise<void>;
  clearData: () => Promise<void>;
}

export const useStoredForm = (config: FormConfig): UseStoredFormReturn => {
  const initialValues = useMemo(() => buildInitialValues(config), [config]);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  useEffect(() => {
    const loadStoredData = async (): Promise<void> => {
      const storedData = await getFormData();

      if (storedData) {
        setValues({ ...initialValues, ...storedData });
        setSubmittedData(storedData);
      }
    };

    void loadStoredData();
  }, [initialValues]);

  const updateValue = useCallback((fieldId: string, value: FormValue): void => {
    setValues((currentValues) => ({
      ...currentValues,
      [fieldId]: value,
    }));

    setErrors((currentErrors) => {
      const updatedErrors = { ...currentErrors };
      delete updatedErrors[fieldId];
      return updatedErrors;
    });
  }, []);

  const submitForm = useCallback(async (): Promise<void> => {
    const validationErrors = validateForm(config, values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    await saveFormData(values);
    setSubmittedData(values);
  }, [config, values]);

  const clearData = useCallback(async (): Promise<void> => {
    await clearFormData();
    setValues(initialValues);
    setErrors({});
    setSubmittedData(null);
  }, [initialValues]);

  const hasSubmittedData = useMemo(() => submittedData !== null, [submittedData]);

  return {
    values,
    errors,
    submittedData,
    hasSubmittedData,
    updateValue,
    submitForm,
    clearData,
  };
};
