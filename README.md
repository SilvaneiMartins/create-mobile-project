## 🛍️ Create Mobile Projet (CLI)

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/seu-usuario/create-mobile-project.git/actions)
[![Expo](https://img.shields.io/badge/Expo-SDK%2049-blue)](https://expo.dev/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-blue)](https://www.typescriptlang.org/)

CLI interativa para gerar projetos React Native com Expo, com opção de adicionar ferramentas como Supabase, Axios, TailwindCSS com NativeWind, React Query e mais.

---

## 📦 create-mobile-project CLI

O create-mobile-project é uma ferramenta de linha de comando (CLI) desenvolvida para facilitar e acelerar a criação de projetos mobile utilizando Expo e Expo Router. Com uma interface interativa baseada em perguntas, o usuário pode configurar rapidamente um novo projeto selecionando o nome, o tipo de template e ferramentas adicionais.

✅ Funcionalidades principais:

- As principais funcionabilidades.
    - Criação automática de projeto com Expo CLI ou Expo Router Stack.
    - Instalação opcional de bibliotecas como Supabase, Axios, React Query, Zod, dotenv, React Native Paper e   TailwindCSS com NativeWind.
    - Geração de arquivos e pastas padrões conforme os recursos escolhidos.
    - Pergunta ao final se o usuário deseja gerar um arquivo .zip com o projeto criado, útil para backup ou envio.

🎯 Propósito

Essa CLI foi criada para padronizar e acelerar o processo de bootstrapping de aplicações mobile modernas, permitindo que desenvolvedores iniciem com boas práticas, dependências essenciais e estrutura de projeto organizada – tudo isso com apenas alguns cliques no terminal.

---

## 📋 Passo a passo interativo

1. Informe o nome do projeto
2. Escolha o template desejado
3. Selecione ferramentas adicionais
4. Aguarde a instalação e configuração
5. (Opcional) Gere um `.zip` com o projeto

## ✨ Funcionalidades

-   Criação de projetos com **Expo CLI** ou **Expo Router Stack**
-   Adição opcional de ferramentas como:
    -   Supabase
    -   Axios
    -   React Query
    -   Zod
    -   dotenv
    -   React Native Paper
    -   TailwindCSS com NativeWind
-   Configuração automática
-   Geração opcional de um arquivo `.zip` com o projeto

---

## ⚙️ Como rodar o projeto

Siga as etapas abaixo para clonar, instalar as dependências e executar o projeto em sua máquina:

```bash
    # 1. Clone o repositório
    git clone https://github.com/seu-usuario/create-mobile-project.git

    # 2. Acesse a pasta do projeto
    cd create-mobile-project
```

Instale as dependências:

```bash
    # 3. Instale as dependências
    npm install
```

Torne o comando executável e linke o pacote:

```bash
    # 4. Tansformar arquivo em executavel
    chmod +x index.js
    npm link
```

---

## 💡 Como usar

Depois de instalar com `npm link`, basta rodar:

```bash
create-mobile-project
```

> 📌 **Pré-requisitos:** Ter o [Node.js](https://nodejs.org/), [Expo CLI](https://docs.expo.dev/get-started/installation/) e um emulador Android/iOS ou o app Expo Go instalados.

Você será guiado por prompts para definir:

-   Nome do projeto
-   Tipo de template (Expo CLI ou Expo Router Stack)
-   Quais ferramentas deseja adicionar

---

## 🛠️ Tecnologias e Bibliotecas Utilizadas no projeto

-   Supabase
-   Axios
-   React Query
-   Zod
-   dotenv
-   React Native Paper
-   TailwindCSS + NativeWind

---

## 📦 Remover o link

Caso queira desfazer o `npm link`:

```bash
npm unlink -g create-mobile-project
```

---

## 🤝 Forks e Contribuições

Contribuições são muito bem-vindas!
Se quiser sugerir melhorias, corrigir bugs ou adicionar novas funcionalidades:

1. Faça um fork do repositório.
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: nova feature'`
4. Push na branch: `git push origin minha-feature`
5. Abra um Pull Request

---

## 👤 Desenvolvedor

Desenvolvido por **Silvanei Martins**

-   💼 [LinkedIn](https://www.linkedin.com/in/silvanei-martins-a5412436)
-   🌐 [Site Pessoal](https://silvaneimartins.com.br/)
-   🐱 [GitHub](https://github.com/Store-Sam-Martins)
-   📧 silvaneimartins_rcc@hotmail.com
-   🎥 [YouTube](https://www.youtube.com/@silvaneimartins2487/featured)
-   🐦 [X (Twitter)](https://x.com/SilvaneiMartins)

---

🚀 Sinta-se à vontade para usar este projeto como base para os seus próprios apps.
