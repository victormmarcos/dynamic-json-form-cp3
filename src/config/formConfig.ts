import { FormConfig } from '../types/form';

export const formConfig: FormConfig = {
  title: 'Cadastro de Usuário',
  fields: [
    {
      id: 'name',
      label: 'Nome',
      type: 'text',
      required: true,
      placeholder: 'Digite seu nome',
    },
    {
      id: 'email',
      label: 'E-mail',
      type: 'email',
      required: true,
      placeholder: 'email@exemplo.com',
    },
    {
      id: 'password',
      label: 'Senha',
      type: 'password',
      required: true,
      placeholder: 'Digite sua senha',
    },
    {
      id: 'age',
      label: 'Idade',
      type: 'number',
      required: true,
      placeholder: 'Digite sua idade',
    },
    {
      id: 'bio',
      label: 'Observações',
      type: 'textarea',
      required: false,
      placeholder: 'Conte algo sobre você',
    },
    {
      id: 'gender',
      label: 'Gênero',
      type: 'radio',
      required: true,
      options: [
        { label: 'Masculino', value: 'male' },
        { label: 'Feminino', value: 'female' },
        { label: 'Outro', value: 'other' },
      ],
    },
    {
      id: 'state',
      label: 'Estado',
      type: 'select',
      required: true,
      options: [
        { label: 'Selecione', value: '' },
        { label: 'SP', value: 'SP' },
        { label: 'RJ', value: 'RJ' },
        { label: 'MG', value: 'MG' },
        { label: 'PR', value: 'PR' },
      ],
    },
    {
      id: 'interests',
      label: 'Interesses',
      type: 'checkbox',
      required: true,
      options: [
        { label: 'Tecnologia', value: 'technology' },
        { label: 'Esportes', value: 'sports' },
        { label: 'Games', value: 'games' },
      ],
    },
    {
      id: 'acceptTerms',
      label: 'Aceito os termos de uso',
      type: 'switch',
      required: true,
    },
    {
      id: 'birthDate',
      label: 'Data de nascimento',
      type: 'date',
      required: true,
      placeholder: 'AAAA-MM-DD',
    },
  ],
};
