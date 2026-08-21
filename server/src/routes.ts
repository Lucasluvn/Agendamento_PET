// importando os conteudos que serao usados na aplicacao

import {PrismaClient} from '@prisma/client'
import {PrismaPg} from '@prisma/adapter-pg'
import {Router} from 'express'

// Criando as rotas do back end para a api
const routes = Router ()
const adapter = new PrismaPg({ connectionString: process.env.DIRECT_URL! })
const prisma = new PrismaClient({adapter})

// Rota para a primeira integração da API, que vai ser acessada pelo caminho /api usando o get que serve para pegar informações do servidor, nesse caso, uma mensagem de boas vindas
routes.get("/", async (request, response)=>{
  try {
    const  tutores = await prisma.tutor.findMany()
    response.status(200).json(tutores)
  } catch (error) {
    console.log(error)
    response.status(400).json({error:"Erro ao buscar o tutor"})
  }
})

routes.get("/pets", async (request, response)=>{
  try {
    const petname =  await prisma.pet.findMany()
    response.status(200).json(petname)
  } catch (error) {
    console.log(error)
    response.status(400).json({error:"Erro ao buscar o pet"})
  }
})


routes.get("/agendamento", async (request, response)=>{
  try {
    const agendamento =  await prisma.agendamento.findMany()
  response.status(200).json(agendamento)
  } catch (error) {
    console.log(error)
    response.status(400).json({error:"Erro ao buscar o agendamento"})
  }
})





// Rota post que serve para criar um pet novo
routes.post("/", async(request,response)=>{
  try {
    const name = request.body.nome
  const tutor = await prisma.tutor.create({
  data:{
    Nome: name
  }
  
})
response.status(201).json(tutor)
  } catch (error) {
    console.log(error)
    response.status(400).json({error:"Erro ao criar um tutor"})
  }
})

routes.post("/pets", async(request,response)=>{
  try {
    const name = request.body.nome
    const tututorId = request.body.tutorId
  const pet = await prisma.pet.create({
  data:{
    Nome: name,
    tutorId: tututorId
  }
  
})
response.status(201).json(pet)
  } catch (error) {
    console.log(error)
    response.status(400).json({error:"Erro ao criar um tutor"})
  }
})

routes.post("/agendamento", async(request,response)=>{
  try {
    const servico = request.body.servico
    const horario = request.body.horario
    const petId = request.body.petId
  const agendamento = await prisma.agendamento.create({
  data:{
    Servico: servico,
    
    Horario: horario,

    petId: petId,
    
  }
  
})
response.status(201).json(agendamento)
  } catch (error) {
    console.log(error)
    response.status(400).json({error:"Erro ao criar um agendameto"})
  }
})

// Rota put para editar um pet específico
routes.put("/:id",async (request,response)=>{
  try {
    const id = request.params.id
    const nome = request.body.nome
    const tutor = await prisma.tutor.update({
      where:{
        id:Number(id)
      },
      data:{
        Nome:nome
      }
    }
    )
    response.status(200).json(tutor)
    
  } catch (error) {
    console.log(error)
     response.status(400).json({error:"Erro ao editar o tutor"})
  
  }
})


routes.put("/pets/:id",async (request,response)=>{
  try {
    const id = request.params.id
    const nome = request.body.nome
    const tutorId = request.body.tutorId
    const pet = await prisma.pet.update({
      where:{
        id:Number(id)
      },
      data:{
        Nome:nome, 
        tutorId: tutorId
      }})
      response.status(200).json(pet)
    } catch (error) {
    console.log(error)
     response.status(400).json({error:"Erro ao editar o pet"})}
})

routes.put("/agendamento/:id",async (request,response)=>{
  try {
    const id = request.params.id
    const servico = request.body.servico
    const Horario = request.body.horario
    const petId = request.body.petId
    const agendamento = await prisma.agendamento.update({
      where:{
        id:Number(id)
      },
      data:{
        Servico: servico,
        Horario: Horario,
        petId: petId
      }})
      response.status(200).json(agendamento)
    } catch (error) {
    console.log(error)
     response.status(400).json({error:"Erro ao editar o agendamento"})}
})





// Rota Delete para deletar um dado (tutor,pet etc)
routes.delete("/delete/:id", async (request,response)=>{
try {
    const id =  request.params.id
     console.log('ID recebido:', id)
    const tutor = await prisma.tutor.delete({
      where:{
        id:Number(id)
      }
    })
response.status(200).json(tutor)
  } catch (error) {
    console.log(error)
    response.status(400).json({error:"Erro ao deletar o tutor"})
  }
})


routes.delete("/agendamento/:id", async (request,response)=>{
try {
    const id =  request.params.id
    const agendamento = await prisma.agendamento.delete({
      where:{
        id:Number(id)
      }
    })
response.status(200).json(agendamento)
  } catch (error) {
    console.log(error)
    response.status(400).json({error:"Erro ao deletar o agendamento"})
  }
})

routes.delete("/pets/:id", async (request,response)=>{
try {
    const id =  request.params.id
    const pet = await prisma.pet.delete({
      where:{
        id:Number(id)
      }
    })
response.status(200).json(pet)
  } catch (error) {
    console.log(error)
    response.status(400).json({error:"Erro ao deletar o pet"})
  }
})





export default routes

