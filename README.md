# Formulários Dinâmicos com React Native

## Integrantes

- Arthur Bueno - RM 558396
- João Carotta - RM 555187
- Victor Marcos - RM 556729

## Descrição

Aplicativo mobile desenvolvido em React Native com TypeScript para o Checkpoint 3.

O app gera um formulário dinamicamente a partir de uma estrutura JSON. Os campos não são criados manualmente na tela: o aplicativo percorre o array `fields`, identifica o tipo de campo, renderiza o componente correto, controla os valores, valida campos obrigatórios, salva os dados localmente e exibe o resultado após o envio.

## Tecnologias utilizadas

- React Native
- Expo SDK 55
- TypeScript
- AsyncStorage
- React Native Picker
- StyleSheet
- Flexbox

## Funcionalidades

- Geração dinâmica de formulário a partir de JSON
- Campos de texto, e-mail, senha, número e textarea
- Campos de seleção: select/combo, radio, checkbox, switch e date
- Validação de campos obrigatórios
- Validação básica de e-mail, número e data
- Persistência local com AsyncStorage
- Recuperação dos dados ao abrir o app
- Botão para limpar dados salvos
- Exibição do resultado após submit
- Funcionamento em Android, iOS e Web

## Como executar o projeto

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npx expo start
```

Execute na web:

```bash
npx expo start --web
```

## Estrutura de pastas

```txt
src/
  components/
    DynamicField.tsx
    DynamicForm.tsx
    ResultCard.tsx
  config/
    formConfig.ts
  hooks/
    useStoredForm.ts
  screens/
    HomeScreen.tsx
  services/
    storageService.ts
  types/
    form.ts
  utils/
    formUtils.ts
```

## Prints da aplicação

<img width="845" height="773" alt="Captura de tela 2026-05-18 212625" src="https://github.com/user-attachments/assets/bbe96f84-b84b-43a9-87e3-1da445e6351e" />

<img width="801" height="761" alt="Captura de tela 2026-05-18 212658" src="https://github.com/user-attachments/assets/cb205317-1fae-48d3-8b1b-0a94963a8692" />

