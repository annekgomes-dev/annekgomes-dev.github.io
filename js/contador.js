const BIN_ID = "69b9afa1c3097a1dd533ffe5";
const API_KEY = "$2a$10$zmmaQdVIqMxJEn8asEKOf.fk0Rtygcx.lrV45Lrw92kRUQccI88Y2";

export async function registrarClique(){

  const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
    headers: { "X-Master-Key": API_KEY }
  });

  const data = await res.json();
  let cliques = data.record.cliques || 0;

  cliques++;

  await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY
    },
    body: JSON.stringify({ cliques })
  });

}