<h1 align="center" id="top"> Jogos Olímpicos - Estante Virtual </h1>

<p align="center">
  <a href="#sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#funciona">Funcionalidades</a> &#xa0; | &#xa0;
  <a href="#requisitos">Pré requisitos</a> &#xa0; | &#xa0;
  <a href="#observacoes">Observações</a> &#xa0; | &#xa0;
  <a href="#desenvolvedores">Desenvolvedores</a>
</p>

<h2 id="sobre">:notebook: Sobre </h2>

<p align="center">Esta API foi desenvolvida conforme proposta do bootcampo ministrado pela Labenu para criação de um sistema de controle e tratativa de resultados de jogos olimpícos, sendo necessário verificar as seguintes condições: melhor resultado entre 3 tentativas para cada competidor na modalidade de dardos e menor tempo na corrida de 100 m.</p>

<h2 id="tecnologias"> 🛠 Tecnologias </h2>

As seguintes ferramentas foram usadas na construção do projeto:

* Typescript
* Node.js
* API
* MySQL
* Postman
* Knex
* Express

<h2 id="funciona">:heavy_check_mark: Funcionalidades</h2>

- [x] 1. Criar uma competição
- [x] 2. Cadastrar resultados para uma competição
- [x] 3. Finalizar uma competição
- [x] 4. Retornar o ranking da competição, exibindo a posição final de cada atleta de acordo com o tipo de competição

<h2 id="link">:link: Links Importantes</h2>
<br><a href="https://documenter.getpostman.com/view/21113707/2s93Xzw24X">Documentação Postman</a></br>
<br><a href="https://github.com/estantevirtual/teste_ev">Case legado de referência</a></br>

<h2 id="requisitos">:leftwards_arrow_with_hook: Pré-requisitos</h2>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<h4>:checkered_flag: Rodando o projeto </h4>

```bash
# Clone este repositório
$ git clone <https://github.com/future4code/Thais-Sombra>

# Acesse a pasta do projeto no terminal
$ cd ./estanteVirtual

# Crie um arquivo `.env` na pasta raíz do projeto com as suas informações:

DB_HOST = host do banco de dados
DB_USER = user do banco de dados
DB_PASSWORD = senha
DB_NAME = nome do banco de dados

# Instale as dependências
$ npm install

# Para criar tabelas
$ npm run migrations

# Para iniciar o projeto
$ npm run start

# O servidor inciará na porta:3003 - acesse <http://localhost:3003>
```

<h2 id="observacoes">:pencil: Observações</h2>

<a id="pt-scripts"></a>
#### Scripts Disponíveis:
* `npm run migrations` para criar as tabelas.
* `npm run start` para rodar a aplicação.
* `npm run dev` para iniciar a aplicação em modo de desenvolvimento com hot reload.
* `npm run test` para rodar os testes.

<h2 id="desenvolvedores">:construction_worker: Desenvolvedora</h2>

<table> 
<tr>
    
 <td align="center"><a href="https://github.com/leokoga"><img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/80704054?v=4" width="100px" alt=""/>
 <br />
 <sub><b>Leonardo Koga</b></sub></a> <a href="https://github.com/leokoga">🚀</a></td>
 
</tr>
  
</table>

👋🏽 Entre em contato!

<a href="#top">Voltar para o topo</a>