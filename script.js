// OBTENIENDO ELEMENTOS RELOJ
const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second");
    switchColor = document.querySelector(".switch-color")

// EVENTO SWITCH COLOR
switchColor.addEventListener("click", () => {
    // Cambiar a Dark Mode
    body.classList.toggle("dark");
})


const updateTime = () =>{
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