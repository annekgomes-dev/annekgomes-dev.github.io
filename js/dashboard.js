const BIN_ID = "69b9afa1c3097a1dd533ffe5";
const API_KEY = "$2a$10$zmmaQdVIqMxJEn8asEKOf.fk0Rtygcx.lrV45Lrw92kRUQccI88Y2";

async function carregar(){

  try{

    const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      headers: { "X-Master-Key": API_KEY }
    });

    const data = await res.json();

    const total = data.record.cliques || 0;

    document.getElementById("total").innerText = total;

  }catch(e){
    document.getElementById("total").innerText = "Erro";
    console.log(e);
  }

}

// atualiza automático a cada 5s
setInterval(carregar, 5000);

// primeira carga
carregar();