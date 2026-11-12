# MusicBox — Biblioteca Musical

## 1. Identificação do projeto

**Unidade Curricular:** Desenvolvimento de Aplicações Multimédia  
**Instituição:** Instituto Politécnico de Bragança — EsACT  
**Ano letivo:** 2026/2027  
**Projeto:** MusicBox — Biblioteca Musical  

**Elementos do grupo:**
- [Sofia Pinto]
- [Patrícia Costa]


## 2. Objetivo da aplicação

O MusicBox é uma aplicação multimédia desenvolvida em React, que permite organizar e consultar uma pequena biblioteca musical.

O principal objetivo é proporcionar uma forma simples e interativa de visualizar músicas, consultar os seus detalhes e adicionar novas músicas à lista.

## 3. Público-alvo

A aplicação destina-se a pessoas que gostam de música e pretendem organizar ou consultar informações sobre diferentes músicas e artistas.

## 4. Funcionalidades

A aplicação prevê as seguintes funcionalidades:

- Visualização de uma lista de músicas;
- Consulta dos detalhes de cada música;
- Apresentação e ocultação de informações através de um botão;
- Formulário para adicionar novas músicas;
- Atualização automática da lista após a submissão do formulário.

## 5. Protótipo da aplicação

A interface foi pensada para ser simples e intuitiva, estando organizada em duas áreas principais:

**Área da biblioteca musical**
- Título da aplicação;
- Lista de músicas;
- Nome da música e respetivo artista;
- Botão para consultar ou esconder os detalhes.

**Área de adição de músicas**
- Campo para introduzir o nome da música;
- Campo para introduzir o artista;
- Campo para indicar o género musical;
- Botão para adicionar a música à biblioteca.

## 6. Tecnologias utilizadas

- React;
- JavaScript;
- HTML/JSX;
- CSS;
- Vite;
- Visual Studio Code;
- Git e GitHub.

## 7. Organização dos componentes

A aplicação encontra-se organizada através dos seguintes componentes:

- **App.jsx:** componente principal, responsável pela gestão da lista de músicas e pela organização da aplicação.
- **MusicList.jsx:** apresenta dinamicamente a lista de músicas através do método `map()`.
- **MusicCard.jsx:** apresenta cada música e permite consultar ou esconder os seus detalhes.
- **MusicForm.jsx:** contém o formulário utilizado para adicionar novas músicas.

## 8. Funcionamento técnico

A aplicação utiliza `useState` para gerir os dados e atualizar a interface.

O método `map()` permite apresentar dinamicamente as músicas existentes na lista, enquanto a propriedade `key` identifica cada elemento.

São também utilizados eventos como `onClick`, `onChange` e `onSubmit` para permitir a interação com o utilizador.

## 9. Como executar o projeto

Para executar a aplicação localmente, é necessário abrir a pasta do projeto no Visual Studio Code e executar os seguintes comandos no terminal:

```bash
npm install
npm run dev
```

De seguida, abrir no navegador o endereço apresentado pelo Vite.

## 10. Repositório

**GitHub:** [Inserir ligação para o repositório]