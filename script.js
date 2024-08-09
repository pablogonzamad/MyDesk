// OBTENIENDO ELEMENTOS RELOJ
const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    switchColor = document.querySelector(".switch-color")

const colorSelect = document.querySelector("#floatingSelect")

// EVENTO SWITCH COLOR
// switchColor.addEventListener("click", () => {
//     // Cambiar a Dark Mode
//     body.classList.toggle("aqua");
// })

// ESCUCHAR CAMBIO DE COLORINPUT        
colorSelect.addEventListener("change", (event) => {
    // OBTENER VALOR SELECCIONADO
    const selectedVal = event.target.value;

    // LIMPIAR COLOR ACTUAL
    body.classList.remove("dark", "aqua", "amazona", "default");

    switch (selectedVal || null) {
        case 'dark':
            body.classList.add("dark");

            break;

        case 'aqua':
            body.classList.add("aqua");
            break;

        case 'amazona':
            body.classList.add("amazona");
            break;



        case 'default':
            body.classList.add("default");
            break;
    }
})

const updateTime = () => {
    // OBTENER TIEMPO ACTUAL Y CALCULAR GRADOS PARA MANECILLAS
    let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360;
    minToDeg = (date.getMinutes() / 60) * 360;
    hrToDeg = (date.getHours() / 12) * 360;

    // ROTAR SECUNDERO SEGUN TIEMPO ACTUAL
    secondHand.style.transform = `rotate(${secToDeg}deg)`
    minuteHand.style.transform = `rotate(${minToDeg}deg)`
    hourHand.style.transform = `rotate(${hrToDeg}deg)`



}

// OBTENER DATETIME PARA EL RELOJ    
setInterval(updateTime, 1000);

// LLAMAR FUNCION UDATETIME AL CARGAR