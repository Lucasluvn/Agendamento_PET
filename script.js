//pega o campo do nome do pet, tutor, tipo de agendamento do pet e o horario (global)
const petInput = document.getElementById("pet")
const tutorInput = document.getElementById("tutor")
const descriptionInput = document.getElementById("description")
const timeSchedule = document.getElementById("time")
const scheduleMorinig = document.getElementById("schedule-morning")
const scheduleAfternoon = document.getElementById("schedule-afternoon")

// Cria o "gatilho" para ativar os inputs "petname","tutot name" e "servive description"
const formSchedule = document.getElementById("schedule-form")
formSchedule.onsubmit = (event)  => {
 const petName = petInput.value 
 const tutorName = tutorInput.value
 const descriptionName = descriptionInput.value
 const timeInput = timeSchedule.value
 
 if(timeInput >= "8:00" && timeInput <= "12:00") {
  console.log("O HORARIO DA MANHA")
 } else if (timeInput >=  "13:00" && timeInput <= "18:00"){ 
  console.log("O HORARIO DA TARDE")
 } else {
  console.log("horario fora do expediente")
 }


// Previne o envio de formulario constante 
  event.preventDefault()
}
// formatando a hora do input "horario"
const timeHorario = new Date();
console.log(timeHorario.toDateString("pt-Br"))

const timeFormated = document.getElementById("time")
timeFormated.addEventListener("input",function () {
  // Pega o valor e limpa (deixando só números) e Usamos .replace(/\D/g, "") para dizer: "o que não for número, vira vazio"
           
let newtimeFormated = timeFormated.value.replace(/\D/g, "")

//  Se o usuário já digitou 3 números ou mais, o texto é "furado" o texto e põe o ":"
if (newtimeFormated.length > 2) {
  //  Pegamos os 2 primeiros + ":" + o resto (até o 4º número)
  newtimeFormated = newtimeFormated.slice(0,2) + ":" + newtimeFormated.slice(2,4)
  
}
// Devolvemos o valor arrumado para a tela
timeFormated.value = newtimeFormated
});


// Comando para fazer o JS monitorar os cliques nso horarios agendados
const scheduleList = document.querySelector(".schedule-list");
scheduleList.addEventListener("click",() =>{
  console.log("botão clicado");
});