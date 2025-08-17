const albuns = [
    {
        nome: "🏖️ Praia",
        imagens: [
            "galeria_imagens/praia1.png",
            "galeria_imagens/praia2.png",
            "galeria_imagens/praia3.png",
            "galeria_imagens/praia4.png",
            "galeria_imagens/praia5.png"
        ]
    },
    {
        nome: "🌾 Fazenda",
        imagens: [
            "galeria_imagens/fazenda1.png",
            "galeria_imagens/fazenda2.png",
            "galeria_imagens/fazenda3.png",
            "galeria_imagens/fazenda4.png",
            "galeria_imagens/fazenda5.png"
        ]
    },
    {
        nome: "⚽ Futebol",
        imagens: [
            "galeria_imagens/futebol1.png",
            "galeria_imagens/futebol2.png",
            "galeria_imagens/futebol3.png",
            "galeria_imagens/futebol4.png",
            "galeria_imagens/futebol5.png"
        ]
    }
];

let indice = 0;

function atualizarAlbum() {
    document.getElementById("album-titulo").innerText = albuns[indice].nome;
    document.getElementById("foto-destaque").src = albuns[indice].imagens[0];
    document.getElementById("foto1").src = albuns[indice].imagens[1];
    document.getElementById("foto2").src = albuns[indice].imagens[2];
    document.getElementById("foto3").src = albuns[indice].imagens[3];
    document.getElementById("foto4").src = albuns[indice].imagens[4];
}

document.getElementById("next").addEventListener("click", () => {
    indice = (indice + 1) % albuns.length;
    atualizarAlbum();
});

document.getElementById("prev").addEventListener("click", () => {
    indice = (indice - 1 + albuns.length) % albuns.length;
    atualizarAlbum();
});
