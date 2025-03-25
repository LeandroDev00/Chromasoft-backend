# :📜: Passos para rodar a aplicação

# 1. Clone o repositório
- Clone o repositório com os comandos
- git clone https://github.com/LeandroDev00/Chromasoft-backend.git

# 2. Instale as dependências
- Utilize o seguinte comando para criar a pasta node_modules
- yarn install ou npm install
    - Verifique se possui o [NodeJS](https://nodejs.org/en) instalado com node --version
    - E o [yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable) para gerenciamento dos pacotes

# 3. Inicie o servidor
- Utilize o comando yarn dev ou npm run dev
 - Verifique em package.json como está o scripts:
    - caso esteja assim 
  "scripts": {
    "dev": "node src/server.js",
    "test": "jest"
  },
    - O comando para iniciar a aplicação será yarn dev ou npm run dev.
    - Toda altereação realizada no backend é preciso fechar o servidor com ctrl + c no terminal e iniciar novamente, mesmo que tenha a opção de salvamento automático no Visual Studio Code.

# 4. Para testar as APIS poderá utilizar as seguintes ferramentes
- Postman (https://www.postman.com/downloads/)
- Insomnia (https://insomnia.rest/download)
- ou qualquer ferramenta de teste de API que você preferir

<p align="center">
  <img alt="Home TaskChromasoft" src="./src/assets/Insomnia - APIS.png" width="100%">
</p>

# 5 Prisma e Migrations
O Prisma é uma ferramenta poderosa para gerenciar o esquema do banco de dados e realizar migrations. É essencial consultar a documentação oficial para entender melhor suas funcionalidades.

Aqui estão alguns comandos importantes:

1️⃣ Criar uma nova migration (aplicando alterações no banco de dados):

npx prisma migrate dev
Esse comando cria e aplica migrations com base no esquema definido no prisma/schema.prisma.

2️⃣ Sincronizar o Prisma com um banco de dados existente:

npx prisma db pull
Esse comando lê a estrutura do banco de dados e gera um esquema Prisma atualizado a partir dele.

3️⃣ Gerar as classes para manipulação do banco de dados:

npx prisma generate
Após rodar esse comando, o Prisma cria automaticamente as classes e tipos necessários para interagir com o banco de dados no código.

⚡ Dica: Sempre execute npx prisma generate após modificar o esquema do banco para garantir que as classes estejam atualizadas.

Para mais detalhes, consulte a documentação oficial do Prisma. 🚀
https://www.prisma.io/docs/orm/prisma-migrate/getting-started
https://www.prisma.io/docs/orm/overview/databases/mysql#connection-url