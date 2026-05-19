# Formulários Dinâmicos com React Native

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

Adicione aqui os prints da aplicação rodando em Android, iOS ou Web antes de entregar.

Exemplo:

```md
![Tela inicial](./docs/print-home.png)
![Resultado salvo](./docs/print-resultado.png)
```

## Integrantes

- Arthur Bueno - RM 558396
- João Carotta - RM 555187
- Victor Marcos — RM 556729