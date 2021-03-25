let CalcularTempratura = (TemperaturaDia1Max,TemperaturaDia1Min,TemperaturaDia2Max,
    TemperaturaDia2Min,TemperaturaDia3Max,TemperaturaDia3Min,
    TemperaturaDia4Max,TemperaturaDia4Min,TemperaturaDia5Max,TemperaturaDia5Min) => {

        let Suma = TemperaturaDia1Max+TemperaturaDia1Min+TemperaturaDia2Max+
        TemperaturaDia2Min+TemperaturaDia3Max+TemperaturaDia3Min+
        TemperaturaDia4Max+TemperaturaDia4Min+TemperaturaDia5Max+TemperaturaDia5Min;

        let TemperaPromedio = Suma/10;
        return TemperaPromedio;
    }
        console.log(CalcularTempratura(25,2,30,1,22,1,18,2,16,10));