# nutrilife

## como instalar as deps do projeto?

### pré-requisitos

- `node` na versão `lts/iron (20.x)`
  - você encontra mais informações sobre a instalação nesse [link](https://nodejs.org/en/download/package-manager)
- `pnpm` na versão `9.7.0`
  - é um gerenciador de pacotes alternativo ao `npm`, o que traz diversos benefícios
  - instale com o seguinte comando: `npm i -g 'pnpm@9.7.0'`

## como rodar o projeto?

como estamos usando o [turborepo](https://turbo.build/repo/docs), subir todo o projeto foi extremamente facilitado.

ao usar um único comando, você terá rodando o todos os projetos em `apps/`, que até o momento são o aplicativo `mobile` e o `server`.

```sh
pnpm install
pnpm dev
```

## como adicionar uma dependência a um projeto específico?

uma das ideias centrais de [monorepositórios](https://monorepo.tools) é justamente em poder gerenciar dependências de múltiplos projetos ao mesmo tempo, com um único `node_modules`.

assim sendo, você verá dentro do projeto diversos `package.json`, e a chave `name` dentro de cada um é extremamente importante.
tendo como exemplo o `package.json` do client:

```json
{
    "name": "@nutrilife/mobile",
    "main": "main.js",
    "private": true,
    ...
}
```

para adicionar uma nova dependência, é necessário usar o seguinte comando:

```sh
pnpm install --filter '<nome_do_projeto_dentro_do_package_json>' dep_1 dep_2 dep_3
```

levando como exemplo o projeto mobile, para adicionar a dependência `@tanstack/react-query` seria assim:

```sh
pnpm install --filter '@nutrilife/mobile' @tanstack/react-query
```

## como adicionar uma dependência à raiz do monorepositório?

```sh
pnpm install -w dep
```
