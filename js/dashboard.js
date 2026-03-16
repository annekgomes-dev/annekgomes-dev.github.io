let cliques = localStorage.getItem("cliquesCampanha");

if(!cliques){
cliques = 0;
}

document.getElementById("contador").innerText = cliques;

/* total de usuários simulados */

let totalUsuarios = 150;

let naoClicaram = totalUsuarios - cliques;

const ctx = document.getElementById("grafico");

new Chart(ctx,{

type:'doughnut',

data:{

labels:[
"Usuários que clicaram",
"Usuários que não clicaram"
],

datasets:[{

data:[
cliques,
naoClicaram
]

}]

}

});