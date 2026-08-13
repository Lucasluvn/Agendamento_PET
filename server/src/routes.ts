// Criando as rotas do back end para a api

import {Router} from 'express'


const routes = Router ()

// Rota para a primeira integração da API, que vai ser acessada pelo caminho /api usando o get que serve para pegar informações do servidor, nesse caso, uma mensagem de boas vindas
routes.get("/:id", (request, response)=>{
  response.json({message:"Bem vindo a primeira integração de API"})

})

// Rota post que serve para criar um pet novo
routes.post("/", (request,response)=>{
  response.json({message:"Pet cadastrado com sucesso"})
})

// Rota put para editar um pet específico
routes.put("/:id",(request,response)=>{
  response.json({message:"Pet editado com sucesso"})
})

// Rota Delete para deletar um dado (tutor,pet etc)
routes.delete("/:id",(request,response)=>{
response.json({message:"Pet ou Tutor removidos com sucesso"})
})
export default routes