// ID único por usuário (evita múltiplos cliques falsos)
let userId = localStorage.getItem("userCampanha");

if (!userId) {
    userId = "user-" + Math.random().toString(36).substring(2, 9);
    localStorage.setItem("userCampanha", userId);
}

// verifica se já clicou
let jaClicou = localStorage.getItem("jaClicou");

if (!jaClicou) {

    fetch("https://api.counterapi.dev/v1/flex-campanha/phishing/up")
    .then(res => res.json())
    .then(data => {

        console.log("Total de cliques:", data.count);

        // salva que esse usuário já foi contado
        localStorage.setItem("jaClicou", "true");

        // salva log local (base para relatório futuro)
        let log = {
            user: userId,
            data: new Date().toISOString()
        };

        localStorage.setItem("logCampanha", JSON.stringify(log));

    })
    .catch(err => {
        console.log("Erro contador:", err);
    });

}