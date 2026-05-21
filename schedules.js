import { scheduleMorning, scheduleAfternoon } from "./script.js";

// schedules.js
export function addSchedule(petName, tutorName, descriptionName, timeInput) {
// ... todo o código da função que cria o card ...
const newAppointment = document.querySelector("#schedule-morning")
// Cria um novo elemento li
const creatItem = document.createElement("li")
// define o texto dentro do novo elemento 
/*creatItem.textContent = `${petName},${tutorName},${descriptionName}.${timeInput}`*/
// Adciona o novo li ao final da lista 
newAppointment.appendChild(creatItem)  

// Cria o icone de remover ou cancelar o agendamento:
const removeIcon = document.createElement("button")
removeIcon.classList.add("remove-icon")  
creatItem.appendChild(removeIcon)

// criando o conteudo do botao remover
const cancelIcon = document.createElement("i")
cancelIcon.classList.add("ph","ph-x")
removeIcon.appendChild(cancelIcon)

// formatando o texto dos cards dinamicos
const scheduleInfo = document.createElement("div")
scheduleInfo.classList.add("schedule-info")
creatItem.appendChild(scheduleInfo)

// pegando os valores das informaçoes que iram aparecer no card 
 const petInfo = document.createElement("span")
 petInfo.textContent = petName
 // append child cria um elemento dentro do outro "scheduleinfo" é a caixa e o "span" é o conteudo
 scheduleInfo.appendChild(petInfo)
 
 //
 
 const tutorInfo = document.createElement("span")
 tutorInfo.textContent = tutorName
 scheduleInfo.appendChild(tutorInfo)
 
 //

 const descriptionInfo = document.createElement("span")
 descriptionInfo.textContent = descriptionName
 scheduleInfo.appendChild(descriptionInfo)

 // 

 const timeInfo = document.createElement("span")
timeInfo.textContent = timeInput
scheduleInfo.appendChild(timeInfo)

}



