// diz pro Prisma onde encontrar o arquivo schema.prisma e também guarda a conexão com o banco de dados (a URL que vem do .env) — que antes ficava dentro do próprio schema.prisma

import 'dotenv/config'
import { defineConfig } from 'prisma/config'


export default defineConfig({
  schema: 'server/prisma/schema.prisma',
  datasource:{
    url: process.env.DIRECT_URL!,}

})