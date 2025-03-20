function encontrarEstrelasDuplicadas(estrelas) {
    const duplicadas = [];
    const jaEncontradas = [];

    for (const estrela of estrelas) {
        if (jaEncontradas.includes(estrela) && !duplicadas.includes(estrela)) {
            duplicadas.push(estrela);
        }
        jaEncontradas.push(estrela);
    }

    return duplicadas;
}

document.getElementById('contarEstrelas').addEventListener('click', function() {
    const estrelas = [
        "Arcturus", "Sirius", "Vega", "Arcturus", "Rigel", "Vega",
        "Betelgeuse", "Rigel", "Procyon", "Altair", "Antares", "Capella",
        "Aldebaran", "Spica", "Pollux", "Deneb"
    ];

    const resultado = encontrarEstrelasDuplicadas(estrelas);
    document.getElementById('resultado').innerText = `Estrelas duplicadas: ${resultado.join(', ')}`;
});
