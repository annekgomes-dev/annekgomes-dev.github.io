let cliques = localStorage.getItem("cliquesCampanha");

if(!cliques){

cliques = 0;

}

cliques++;

localStorage.setItem("cliquesCampanha", cliques);