const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = fecha.getHours();
    let min = fecha.getMinutes();
    let seg = fecha.getSeconds();
    document.getElementById('hora').innerHTML = `${hr}: ${min}:${seg}`;

    const meses =['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
    const dias = ['dom','lun','mar','mie','jue','vie','sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia}, ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}
setInterval(mostrarReloj, 1000);