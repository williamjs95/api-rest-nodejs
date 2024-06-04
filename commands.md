>> Initialize node application
npm init -y

>> Run package.json script
npm run

>> Install TypeScript as a development dependency
npm i -D typescript

>> Install types/node as a development dependency
npm install -D @types/node

>> Create TypeScript configuration file
npx tsc --init

>> Roda projeto com TypeScrit
npx tsc

>> Convert TypeScript to JavaScript
npx tsc src/index.ts

>> Automate TypeScript to JavaScript conversion
npm install tsx -D

>> Run application with tsx (dev only)
npx tsx src/server.ts

>> Install fastify
npm i fastify

>> Install ESLint with RocketSeat configuration package
npm i eslint @rocketseat/eslint-config -D

>> Install Knex with sqlite3
npm install knex sqlite3

>> Install ts package for knex
npm install ts-node @types/knex

>> Create the first database migration (ts)
npx knex migrate create-transactions
OR
npm run knex -- migrate create-transactions

>> Run application with knex
npx knex migrate
OR
npm run knex -- migrate

>> Last migration
npm run knex -- migrate:latest

>> Install dotenv (environment variables)
npm i dotenv

>> Install library for environment variables validation
npm i zod

>> Install library for cookies
npm i @fastify/cookie

>> Install Vitest for E2E tests
npm i vitest -D

>> Run test
npx vitest
OR
npm run test

>> Install supertest as a development dependency
npm i supertest -D

>> Install types for supertest as a development dependency
npm i -D @types/supertest