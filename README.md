# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação simples em Node.js com TypeScript
que consulta dados de Pokémon na PokeAPI e organiza alguns resultados em um
catálogo local durante a execução do programa.

## Objetivo

Praticar os principais conceitos do Módulo 01:

- Node.js;
- JavaScript no back-end;
- TypeScript;
- interfaces;
- funções tipadas;
- arrays;
- objetos;
- JSON;
- métodos de array;
- classes;
- async/await;
- fetch;
- tratamento de erros;
- GitHub;
- GitFlow;
- Kanban.

## Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- npm
- Git

## Como instalar

Clone o repositório:

```bash
git clone LINK_DO_REPOSITORIO
```

Acesse a pasta do projeto:

```bash
cd pokedex-typescript-lite
```

Instale as dependências:

```bash
npm install
```

## Como executar

Execute o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

## Estrutura do projeto

```
pokedex-typescript-lite/
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── src/
    ├── index.ts
    ├── models/
    │   ├── Pokemon.ts
    │   └── PokemonCatalog.ts
    ├── services/
    │   └── FetchPokemon.ts
    └── utils/
        ├── formatPokemon.ts
        └── printSeparator.ts
```

## Funcionalidades

- Buscar Pokémon por nome ou ID
- Tratar erro de Pokémon inexistente
- Transformar resposta da API em objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado
- Listar catálogo
- Remover Pokémon por ID
- Exibir mensagens no terminal
- Exemplos de execução
- Busca válida

## Testes

### Busca válida
**Entrada testada:**
```text
Slowking
```

**Saída obtida:**
```text
[OK] Slowking added to the catalog.
```

### Busca inválida
**Entrada testada:**
```text
hurdur
```

**Saída obtida:**
```text
[ERROR] Pokémon with name hurdur not found.
```

### Listar (com Pokémon)
**Entrada testada:**
```text
Lista com pokémon
```

**Saída obtida:**
```text
Current Catalog:
#199 - Slowking | Types: water, psychic | Height: 20 | Weight: 795
#65 - Alakazam | Types: psychic | Height: 15 | Weight: 480
#38 - Ninetales | Types: fire | Height: 11 | Weight: 199
```

### Listar (vazio)
**Entrada testada:**
```text
Lista vazia
```

**Saída obtida:**
```text
[WARNING] Catalog is empty
```

### Duplicidade
**Entrada testada:**
```text
Adicionar Slowking novamente
```

**Saída obtida:**
```text
[WARNING] Slowking already exists in the catalog.
```

### Remoção
**Entrada testada:**
```text
remover ID 38
```

**Saída obtida:**
```text
[OK] Ninetales was removed from the catalog.
```

## Conceitos aplicados

### TypeScript

- Foram utilizadas interfaces para o retorno da API e da função de busca de Pokémon.
- Foram utilizados parâmetros e retornos tipados em todas as funções e métodos do projeto, com uso de `PokemonSummary` e também `string | number` em parâmetros e retornos quando necessário.

### Interface PokemonResumo

A interface foi criada com a finalidade de mapear os atributos do objeto Pokémon utilizado por toda a aplicação, facilitando leitura e descoberta de propriedades.

### Fetch e async/await

A aplicação consulta a PokeAPI através do serviço `FetchPokemon`, utilizando o método `fetch`, que retorna uma Promise. Para aguardar a conclusão da Promise, são utilizados `async/await`, além do método `json()` para acessar os dados.

### Tratamento de erros

Para tratamento de erros, o serviço de busca de Pokémon utiliza `try/catch`.
No bloco `catch`, a aplicação trata erros de comunicação com a API.
No bloco `try`, há validação da resposta da requisição e, quando o retorno não é positivo, é exibido que o Pokémon ou ID informado não foi encontrado.

### Métodos de array

- Para buscar todos os Pokémon de uma lista no arquivo `index.ts`, foi utilizado `map` em conjunto com `Promise.all`.
- Também foi utilizado `forEach` para adicionar cada item da lista de Pokémon ao catálogo.
- Na função de busca de Pokémon, foi utilizado `map` para transformar os tipos presentes em objetos em uma lista simples.
- Dentro da classe de catálogo, foi utilizado `some` no método de adicionar para verificar se já existe uma entrada.
- No método de listar, foi utilizado `map` junto de `join` para montar as mensagens de cada Pokémon em uma única string.
- No método de remover da classe de catálogo, foi utilizado `findIndex` para localizar o índice do respectivo Pokémon.

### Classe CatalogoPokemon

A classe contém uma lista privada `pokemonList` para armazenamento em memória dos Pokémon.
Os métodos existentes são `add` para adicionar um Pokémon à lista, `list` para listar todos os Pokémon contidos e `remove` para remover um Pokémon através do seu ID.

### Organização do Kanban

Link do Kanban:
[Board do Trello](https://trello.com/b/wlSYXYIa/pokedex-typescript-lite)

## Branches utilizadas

- main
- develop
- feat/fetch-pokemon
- feat/pokemon-catalog
- chore/test-service-workflow
- docs/readme-adjustments

## Melhorias futuras

- Criar menu interativo no terminal
- Salvar catálogo em arquivo JSON
- Exibir HP, ataque e defesa
- Criar filtros por tipo de Pokémon
- Criar uma API própria com Express