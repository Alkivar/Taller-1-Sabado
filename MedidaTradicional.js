let coordenadaFinalx=70;
let coordenadaFinaly=50;
let coordenadaInicialx=0;
let coordenadaInicialy=0;

function calcularDistancia(xinicial,xfinal,yinicial,yfinal){
   
    let coordenadasx = xfinal-xinicial;
    let coordenadasy = yfinal-yinicial;

    let cuadradox= Math.pow(coordenadasx, 2);
    let cuadradoy= Math.pow(coordenadasy, 2);

    let sumaTotal= cuadradox+cuadradoy;

    let distancia= Math.sqrt(sumaTotal);
    return(distancia);
}
console.log (calcularDistancia(coordenadaInicialx,coordenadaFinalx,coordenadaInicialy,coordenadaFinaly));

