const texto = document.getElementById('typing').textContent;
const intervalo = 100; 

let index = 0;
let isDeleting = false; 

function escreverTexto() {
    const textoAtual = texto.substring(0, index);

    document.getElementById('typing').textContent = textoAtual;

    if (!isDeleting) {
        index++;
    } else {
        index--;
    }

    
    if (index > texto.length) {
        isDeleting = true;
    }

    
    if (index === 0) {
        isDeleting = false;
    }

    setTimeout(escreverTexto, intervalo);
}

escreverTexto();


    document.getElementById('mostrarSecao').addEventListener('click', function() {
        var secaoOculta = document.getElementById('secaoOculta');
        if (secaoOculta.style.display === 'none') {
            secaoOculta.style.display = 'block'; 
            this.textContent = 'Sobre Susie'; 
        } else {
            secaoOculta.style.display = 'none';
            this.textContent = 'Sobre Susie'; 
        }
    });

    document.getElementById('mostrarSecao2').addEventListener('click', function() {
        var secaoOculta = document.getElementById('secaoOculta2');
        if (secaoOculta.style.display === 'none') {
            secaoOculta.style.display = 'block'; 
            this.textContent = 'Bolso da Susie'; 
        } else {
            secaoOculta.style.display = 'none';
            this.textContent = 'Bolso da Susie'; 
        }
    });

