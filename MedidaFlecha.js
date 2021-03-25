let CalcularDistancia=(DistanciaFinalX,DistanciaInicialX,DistanciaFinalY,DistanciaInicialY) =>{

    let SumaTotal = (Math.pow(DistanciaFinalX-DistanciaInicialX,2)) + 
                    (Math.pow(DistanciaFinalY-DistanciaInicialY,2));

    console.log (Math.sqrt(SumaTotal,2));
}
    CalcularDistancia(70,0,50,0);




