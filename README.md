##### Desafio Perithus - Sistema de Gerenciamento Financeiro

# Soap

Sistema Web de gerenciamento financeiro para distribuidores de sabonetes, com a finalidade de ajudar os mesmos a terem um maior controle de despesas e lucros de forma automatizada.


------------

### Tecnologias usadas durante o desafio

- **React com Next.Js**: para um tempo de carregamento reduzido e melhor otimização de SEO(Search Engine Optimization), através do SSR (Server Side Rendering).
- **Serveless Functions**: para poder fazer pequenas operações com o backend.
- **Styled Components**: uma lib do React para poder escrever CSS mais facilmente.
- **EditorConfig, Eslint, Prettier e Husky**  : para uma melhor padronização do código.


------------

### Observação

Tive um certa dificuldade com relação a persistência dos dados, pois não sei uma forma eficaz de integrar algum banco de dados com o backend. Devido a isso, eu optei por usar a tecnologia **Serveless Functions** da própria *Vercel* para que eu pudesse consumir uma **API** no frontend, que tem como base de dados dois arquivos **JSON**. Um contendo as informações dos usuários e outro contendo informações referentes as regras de negócio. Esses dois arquivos **JSON**, contém dados fictícios para fins de demonstração das funcionalidade implementadas.

As funcionalidades de **criação de usuário** e de **registro de sabonetes** não estão sendo persistidas.

Em **data de compra** no **registro de sabonetes**, não possui uma limitação quanto ao registro de datas futuras a atual.

Devido a dificuldade de persistência, estão desabilitadas as opções de **editar** ou **excluir** os sabonetes registrados em **registro de sabonetes**.

Não foram implementadas as funcionalidades de **cálculo dos impostos devidos por mês e ano de referência**, **consulta de produtos e impostos por mês e ano de referência** e **marcar o imposto como PAGO**.


------------
### Regras de Negócio

- A cada R$100,00 em lotes comprados, é aplicada um alíquota de 18,5% em cima do valor de compra, para poder usar a marca da distribuidora.
- O imposto referente ao MEI é de 6% em cima do salário mínimo.
- **Foi levada em consideração de que todos os lotes comprados foram vendidos, não havendo estoque.**

------------

### Acesso ao Sistema

Para fins de demonstração das funcionalidades, foram pré-cadastrados dois usuários, juntamente com dados referentes a compra de lotes dos sabonetes, em um arquivo **JSON**. Segue abaixo as informações de e-mail e senha desses dois usuários:

### Usuário Gabriel
Email: gabriel@perithus.com.br

Senha: 123456

### Usuário João
Email: joao@perithus.com.br

Senha: 123456


------------

### Instalação e Execução

**Instalação das dependências**
```
yarn install
```
*Instale o **ESLint**, **EditorConfig** e o **Prettier** no **VSCode** antes da execução*.

**Execução**

```
yarn dev
```

------------
### Releases

Conforme o meu aprendizado, continuarei a desenvolver esse sistema até que ele esteja bem completo e funcional para poder cumprir com o seu objetivo.


------------
### Hospedagem

Esse sitema está sendo hospedado pela *Vercel*. Para poder acessá-lo, basta [clicar aqui](https://soap-perithus.joaod3v.vercel.app/ "clicar aqui").
