document.addEventListener("DOMContentLoaded", function() {
    const mesSelect = document.getElementById("mes");
    const anioSelect = document.getElementById("anio");
    const calendario = document.getElementById("calendario");
    const mensaje = document.getElementById("mensaje");
    const confirmarBtn = document.getElementById("confirmar");
    const cancelarBtn = document.getElementById("cancelar");

    // Llenar select de meses
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    meses.forEach((mes, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.textContent = mes;
        mesSelect.appendChild(option);
    });

    // Llenar select de años
    const anioActual = new Date().getFullYear();
    for (let i = anioActual - 5; i <= anioActual + 5; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        anioSelect.appendChild(option);
    }

    function generarCalendario(mes, anio) {
        calendario.innerHTML = "";
        let primerDia = new Date(anio, mes, 1).getDay();
        let diasEnMes = new Date(anio, mes + 1, 0).getDate();

        for (let i = 0; i < primerDia; i++) {
            let espacio = document.createElement("div");
            calendario.appendChild(espacio);
        }

        for (let dia = 1; dia <= diasEnMes; dia++) {
            let diaElemento = document.createElement("div");
            diaElemento.textContent = dia;
            diaElemento.classList.add("dia");
            let diaSemana = new Date(anio, mes, dia).getDay();
            if (diaSemana === 6) diaElemento.classList.add("sabado");
            if (diaSemana === 0) diaElemento.classList.add("domingo");
            diaElemento.addEventListener("click", function() {
                mensaje.style.display = "block";
            });
            calendario.appendChild(diaElemento);
        }
    }

    mesSelect.addEventListener("change", function() {
        generarCalendario(parseInt(mesSelect.value), parseInt(anioSelect.value));
    });

    anioSelect.addEventListener("change", function() {
        generarCalendario(parseInt(mesSelect.value), parseInt(anioSelect.value));
    });

    cancelarBtn.addEventListener("click", function() {
        mensaje.style.display = "none";
    });

    confirmarBtn.addEventListener("click", function() {
        window.location.href = "https://wa.me/?text=Hola,%20quiero%20consultar%20disponibilidad%20para%20este%20día.";
    });

    generarCalendario(new Date().getMonth(), new Date().getFullYear());
});
