async function carregarDados(){

try{

let response = await fetch("https://api.counterapi.dev/v1/flex-campanha/phishing");

let data = await response.json();

let cliques = data.count || 0;

document.getElementById("contador").innerText = cliques;

/* CONFIGURAÇÃO DA CAMPANHA */

let totalUsuarios = 150; // ajuste aqui
let naoClicaram = totalUsuarios - cliques;

/* TAXA DE RISCO */

let taxa = ((cliques / totalUsuarios) * 100).toFixed(1);

document.getElementById("taxa").innerText = taxa + "%";

/* GRÁFICO */

const ctx = document.getElementById("grafico");

new Chart(ctx,{

type:'doughnut',

data:{
labels:[
"Clicaram",
"Não clicaram"
],
datasets:[{
data:[cliques, naoClicaram]
}]
}

});

}catch(error){

console.log("Erro ao carregar dashboard:", error);

document.getElementById("contador").innerText = "Erro";

}

}

carregarDados();