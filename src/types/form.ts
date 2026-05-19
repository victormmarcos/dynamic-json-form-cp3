export type FieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'multiline'
  | 'textarea'
  | 'select'
  | 'combo'
  | 'radio'
  | 'checkbox'
  | 'switch'
  | 'date';

export type FormValue = string | boolean | string[];

export type FormValues = Record<string, FormValue>;

export interface FieldOption {
  label: string;
  value: string;
}

export interface BaseField {
  id: string;
  label: string;
  type: FieldType;
  required: boolean;
  placeholder?: string;
}

export interface OptionField extends BaseField {
  type: 'select' | 'combo' | 'radio' | 'checkbox';
  options: FieldOption[];
}

export interface SimpleField extends BaseField {
  type: 'text' | 'email' | 'password' | 'number' | 'multiline' | 'textarea' | 'switch' | 'date';
  options?: never;
}

export type FormField = SimpleField | OptionField;

export interface FormConfig {
  title: string;
  fields: FormField[];
}

export type FormErrors = Record<string, string>;
