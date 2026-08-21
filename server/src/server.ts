// importando o express para criar o servidor
import dns from 'node:dns'
dns.setDefaultResultOrder('ipv4first')

import 'dotenv/config'
console.log('DATABASE_URL:', process.env.DATABASE_URL)
import express from 'express'

import Routes from './routes.js'

// Criando instancia do Exprress que serve como a espinha dorsal do servidor e todo conteudo do servidor 

const app = express ()
const port = 4000

// cria uma conexão (ou "ligação") entre o app principal e outra peça externa nesse caso, o Routes
app.use(express.json())

app.use('/api',Routes)


// Vai escutar tudo que passar pelo servidor

app.listen(port,()=>{
  console.log (`servidor está ouvndo ${port}`)
})

