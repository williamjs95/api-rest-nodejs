> > Inicia aplicação node
> > npm init -y

> > Roda script do package.json
> > npm run dev

> > Instala TypeScript como depedência de desenvolvimento
> > npm i -D typescript

> > Instala types/node como depedência de desenvolvimento
> > npm install -D @types/node

> > Cria arquivo de configurações do TypeScript
> > npx tsc --init

> > Converte typescript em javascript
> > npx tsc src/index.ts

> > Automatiza conversão de typescript para javascript
> > npm install tsx -D

> > Roda aplicação com tsx (apenas em dev)
> > npx tsx src/server.ts

> > Instala fastfy
> > npm i fastify

> > Instala ESLint com pacote de configuração da RocketSeat
npm i eslint @rocketseat/esling-config -D

>> Instala Knex com sqlite3
npm install knex sqlite3

>> Instala pacote ts para knex
npm install ts-node @types/knex

>> Cria primeira migração do database (ts)
npx knex migrate:make create-documents
npm run knex -- migrate:make create-documents






