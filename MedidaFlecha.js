let CalcularDistancia=(DistanciaFinalX,DistanciaInicialX,DistanciaFinalY,DistanciaInicialY)=>{
    let SumaTotal=(Math.pow(DistanciaFinalX-DistanciaInicialX,2)) + (Math.pow(DistanciaFinalY-DistanciaInicialY,2));
    return Math.sqrt(SumaTotal,2);
}
console.log(CalcularDistancia(70,0,50,0));




