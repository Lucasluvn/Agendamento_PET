import { scheduleMorning, scheduleAfternoon } from "./script.js";

// schedules.js
export function addSchedule(petName, tutorName, descriptionName, timeInput) {
// ... todo o código da função que cria o card ...
const newAppointment = document.querySelector("#schedule-morning")
// Cria um novo elemento li
const creatItem = document.createElement("li")
// define o texto dentro do novo elemento 
creatItem.textContent = `${petName},${tutorName},${descriptionName}.${timeInput}`
// Adciona o novo li ao final da lista 
newAppointment.appendChild(creatItem)  
}



