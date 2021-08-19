# Alura Viagens

**Desafio Extra**

Esse desafio extra além de ser uma opção para mergulhar fundo em validações de formulários e controle de estado, é também uma oportunidade para treinar CSS, afinal nem só de JavaScript vive quem trabalha com front-end.

## Demo

https://alura-viagens-omega.vercel.app/

## Deployment

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-styled-components&project-name=with-styled-components&repository-name=with-styled-components)

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Run Locally

Clone the project

```bash
  git clone https://github.com/mayrazan/Mayra_Zanchett_Manchein_BootcampFrontendAlura_Extra.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-styled-components with-styled-components-app
# or
yarn create next-app --example with-styled-components with-styled-components-app
```

## Tech Stack

- React
- NextJS
- Styled-Components
- Prop-Types

## Assignments

- [x] Opção de pagamento (PayPal, cartão de credito ou transferência):
      Mostre com destaque na cor da sua preferência a opção que for selecionada.
- [ ] No campo Nome:
      O input não pode ser vazio e não pode ter número.
- [ ] No campo Sobrenome:
      O input não pode ser vazio e não pode ter número.
- [ ] No campo País de Residência:
      O input não pode ser vazio e não pode ter número.
- [ ] No campo Local de Origem:
      O input não pode ser vazio e não pode ter número.
- [ ] No campo Local de Chegada:
      O input não pode ser vazio e não pode ter número.
- [x] Melhorando o UX
      Essa tarefa não é obrigatória, mas fica o desafio modo hard para se fazer. Um autocomplete para exibir os nomes dos países, melhorando ainda mais a experiência do usuário.
- [ ] No campo CPF:
      Verifique se o número do CPF é válido.
      Crie uma máscara de exibição, para indicar como os dados devem ser exibidos, assim como é mostrado no layout.
- [ ] No campo Telefone:
      Verifique se o número de telefone é válido.
      Crie uma máscara de exibição, para indicar como os dados devem ser exibidos, assim como é mostrado no layout.
- [ ] No campo Email:
      Verifique se o formato do email é válido.
- [ ] No campo de Data de Nascimento:
      Verifique se a pessoa tem mais de dezoito anos, caso contrário o botão de compra não deve aparecer.
- [ ] Nos campos Data da saída e Data de retorno:
      A data de saída não pode ser a anterior a data de retorno.
- [ ] Exiba o botão de compra somente, se todos os dados do formulário estiverem preenchidos.
- [ ] Exibir alertas caso alguma informação seja preenchida errada ou esteja faltando.

## CI / CD

Instruções de como criar um sistema de integração e entrega contínua o CI/CD.

Instalar as seguintes dependências:

```bash
yarn add husky --dev
yarn add eslint --dev
yarn add lint-staged --dev
npm install -g commitizen
commitizen init cz-conventional-changelog --yarn --dev --exact
yarn add @commitlint/config-conventional @commitlint/cli --dev
```

Adicionar as seguintes configurações no package.json:

```json
"scripts": {
    "lint": "eslint --ignore-path .gitignore .",
    "lint:fix": "yarn lint --fix",
    "prepare": "husky install",
    "commit": "cz",
    "lint-staged": "lint-staged"
}

"lint-staged": {
    "*.js": [
      "yarn lint:fix"
    ]
  },

"husky": {
    "hooks": {
      "pre-push": "yarn lint",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
},
```

## Terminal commands

**Run**

```bash
yarn run eslint --init
yarn prepare
```

**Add a hook:**

```bash
npx husky add .husky/pre-commit "yarn lint-staged"
```

**Configure commitlint to use conventional config:**

```bash
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

Para utilizar os comandos configurados, sempre que for commitar algum arquivo utilize `yarn commit` ao invés de `git commit -m "mensagem"`.

## Color Reference

| Color | Hex                                                              |
| ----- | ---------------------------------------------------------------- |
| Ming  | ![#246A73](https://via.placeholder.com/10/246A73?text=+) #246A73 |
| Black | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |
| White | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |

## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
