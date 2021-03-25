let TemperaturaDia1Max = 25;
let TemperaturaDia1Min = 2;
let TemperaturaDia2Max = 30;
let TemperaturaDia2Min = 1;
let TemperaturaDia3Max = 22;
let TemperaturaDia3Min = 1;
let TemperaturaDia4Max = 18;
let TemperaturaDia4Min = 2;
let TemperaturaDia5Max = 16;
let TemperaturaDia5Min = 10;

function CalcularTempratura(TemperaturaDia1Max,TemperaturaDia1Min,TemperaturaDia2Max,
    TemperaturaDia2Min,TemperaturaDia3Max,TemperaturaDia3Min,
    TemperaturaDia4Max,TemperaturaDia4Min,TemperaturaDia5Max,TemperaturaDia5Min){

        let SumaTemp = TemperaturaDia1Max+TemperaturaDia1Min+TemperaturaDia2Max+
        TemperaturaDia2Min+TemperaturaDia3Max+TemperaturaDia3Min+
        TemperaturaDia4Max+TemperaturaDia4Min+TemperaturaDia5Max+TemperaturaDia5Min;

        let SumaTotal = SumaTemp;

        let Division = (SumaTotal / 10);

        return Division;
    }
        console.log(CalcularTempratura(TemperaturaDia1Max,TemperaturaDia1Min,TemperaturaDia2Max,
            TemperaturaDia2Min,TemperaturaDia3Max,TemperaturaDia3Min,
            TemperaturaDia4Max,TemperaturaDia4Min,TemperaturaDia5Max,TemperaturaDia5Min));
 