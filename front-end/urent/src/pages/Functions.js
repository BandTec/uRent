import estrelaApagada from '../assets/Star 5.png'
import estrelaLigada from '../assets/Star 4.png'

function carregarEstrelas(nota) {

    // console.log("AAA" + nota);
    nota = nota / 2;

    if (nota >= 4.7) {
        document.getElementById("i1").src = estrelaLigada;
        document.getElementById("i2").src = estrelaLigada;
        document.getElementById("i3").src = estrelaLigada;
        document.getElementById("i4").src = estrelaLigada;
        document.getElementById("i5").src = estrelaLigada;

    } else if (nota >= 3.7) {
        document.getElementById("i1").src = estrelaLigada;
        document.getElementById("i2").src = estrelaLigada;
        document.getElementById("i3").src = estrelaLigada;
        document.getElementById("i4").src = estrelaLigada;
        document.getElementById("i5").src = estrelaApagada;

    } else if (nota >= 2.7) {
        document.getElementById("i1").src = estrelaLigada;
        document.getElementById("i2").src = estrelaLigada;
        document.getElementById("i3").src = estrelaLigada;
        document.getElementById("i4").src = estrelaApagada;
        document.getElementById("i5").src = estrelaApagada;

    } else if (nota >= 1.7) {
        document.getElementById("i1").src = estrelaLigada;
        document.getElementById("i2").src = estrelaLigada;
        document.getElementById("i3").src = estrelaApagada;
        document.getElementById("i4").src = estrelaApagada;
        document.getElementById("i5").src = estrelaApagada;

    } else if (nota >= 0.7) {
        document.getElementById("i1").src = estrelaLigada;
        document.getElementById("i2").src = estrelaApagada;
        document.getElementById("i3").src = estrelaApagada;
        document.getElementById("i4").src = estrelaApagada;
        document.getElementById("i5").src = estrelaApagada;
    } else {
        document.getElementById("i1").src = estrelaApagada;
        document.getElementById("i2").src = estrelaApagada;
        document.getElementById("i3").src = estrelaApagada;
        document.getElementById("i4").src = estrelaApagada;
        document.getElementById("i5").src = estrelaApagada;
    }
}

export default carregarEstrelas