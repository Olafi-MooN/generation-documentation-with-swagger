> Aprendendo a utilizar a documentação do swagger

É necessariot ter um conhecimento basico de como funciona o node.

> Instalação e modulos
1. Primeiramente: Faça um clone do projeto.
2. No terminal, navegue ate a pasta do projeto clonado e execute, npm install.

modulos que serão instalados (depois de executar o comando npm install):

[
    "express": "Gerenciador de rotas",
    "swagger-autogen": "Vai gerar a documentação automaticamente",
    "swagger-ui-express": "Vai criar o caminho/pagina para exibição da documentação",
    "nodemon": "Reicinicia o servidor toda vez que o projeto for salvo" 
]

> Sobre as pastas do projeto:

./src > tem toda a estrutura do projeto;

./src/index.js > Responsavel por iniciar o servidor, chamar as rotas e criar o caminho para pagina da documentação do swagger;

./src/routes.j > Responsavel por criar as rotas com os seus verbos;

./src/documentation/index.js > Responsavel por gerar automaticamente a documentação das rotas da api;
./src/documentation/doc.js > Exporta um objeto que contem informações sobre a documentação que deve ser gerada.
./src/documentation/doc.js > Fica toda a documentação da api, porem no formato JSON.

> Referencia completa sobre como funciona a geração da documentação do swagger