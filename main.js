function typeWriter(text, elementId, speed) {
    let i = 0;
    const element = document.getElementById(elementId);

    function addLetter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(addLetter, speed);
        } else {
            // Quando o texto for totalmente exibido, limpar e reiniciar o efeito
            setTimeout(function() {
                element.innerHTML = ''; // Limpar o texto
                typeWriter(text, elementId, speed); // Reiniciar o efeito
            }, 1000); // Espera 1 segundo antes de reiniciar
        }
    }

    addLetter();
}

// Exemplo de uso
const texto = "Te amo minha Noite Estrelada. :)";
typeWriter(texto, "text", 200); // 100ms entre as letras
