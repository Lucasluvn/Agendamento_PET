import { addSchedule } from "./schedules.js";

"use strict"
// Pega o campo do nome do pet, tutor, tipo de agendamento do pet e o horario (global)
const petInput = document.getElementById("pet");
const tutorInput = document.getElementById("tutor");
const descriptionInput = document.getElementById("description");
const timeSchedule = document.getElementById("time"); // Centralizado como timeSchedule

// Seleciona as listas de agendamento (Manhã e Tarde)
export const scheduleMorning = document.getElementById("schedule-morning");
export const scheduleAfternoon = document.getElementById("schedule-afternoon");

// Cria o "gatilho" para ativar os inputs "petname", "tutor name" e "service description"
const formSchedule = document.getElementById("schedule-form");

formSchedule.onsubmit = (event) => {
    // Previne o envio de formulario constante 
    event.preventDefault();

    const petName = petInput.value;
    const tutorName = tutorInput.value;
    const descriptionName = descriptionInput.value;
    const timeInput = timeSchedule.value;

    //  Checa se está aberto 
    if (timeInput >= "08:00" && timeInput <= "18:00") {
    //  decide em qual lista colocar (O "Filtro")
    if (timeInput < "13:00") {
    addSchedule(petName, tutorName, descriptionName, timeInput,scheduleMorning);
    console.log("Horario agendado pela manhã");
    // Aqui você chamará sua função de criar o HTML na lista de manhã
} else {
    addSchedule(petName, tutorName, descriptionName, timeInput,scheduleAfternoon);
    console.log("Horario agendado pela tarde");
    // Aqui você chamará sua função de criar o HTML na lista de tarde
}
// Limpa o formulário após o sucesso
formSchedule.reset();
} else {
alert("Opa! Só atendemos das 08:00 às 18:00.");
}
};

// formatando a hora do input "horario"
// Usamos o evento "input" para que a máscara funcione enquanto o usuário digita
timeSchedule.addEventListener("input", () => {
// Pega o valor e limpa (deixando só números),Usamos .replace(/\D/g, "") para dizer: "o que não for número, vira vazio"
let newtimeFormated = timeSchedule.value.replace(/\D/g, "");

// Se o usuário já digitou 3 números ou mais, o texto é "furado" e põe o ":"
if (newtimeFormated.length > 2) {
// Pegamos os 2 primeiros + ":" + o resto (até o 4º número)
newtimeFormated = newtimeFormated.slice(0, 2) + ":" + newtimeFormated.slice(2, 4);
}

// Devolvemos o valor arrumado para a tela
timeSchedule.value = newtimeFormated;
});

// Comando para fazer o JS monitorar os cliques nos horarios agendados e Usamos querySelectorAll para pegar todas as listas (manhã e tarde)
const scheduleLists = document.querySelectorAll(".schedule-list");

scheduleLists.forEach((list) => {
list.addEventListener("click", (event) => {
// Verifica se o clique foi no ícone de remover 

if (event.target.classList.contains("remove-icon")) {
console.log("botão clicado");
// Lógica para adicionar função no botão de remover o agendamento
const removeappointment = event.target.closest("li")
 // Remove o elemento <li> do HTML se ele existir
 if (removeappointment){
    removeappointment.remove()
 }
}
});
});