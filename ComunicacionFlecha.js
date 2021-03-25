var informacion = (codigo, codigo1, nombre, Nombre1, NumeroNave, NumeroNave1) => {
     
    var todo = codigo+codigo1+nombre+Nombre1+NumeroNave+NumeroNave1;
    return todo;
}
console.log(informacion("Codigo: ","QWER123 ", "  Nombre: ", "Alkivar ", "  Numero Nave: ", "11 "));
console.log(informacion("Codigo: ","QWES555 ", "  Nombre: ", "Carlos  ", "  Numero Nave: ", "22 " ));
console.log(informacion("Codigo: ","ASDF121 ", "  Nombre: ", "Lukas ", "  Numero Nave: ", "2100 "));                 

