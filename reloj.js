function ticks(){
    horaActual = new Date().toLocaleString();
    mireloj = document.getElementById("reloj");
    mireloj.innerHTML = horraActual;
}
setInterval(ticks, 1000);