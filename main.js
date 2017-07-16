//T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E,
var calculaDNI = function(numeroDNI) {
    var tablaLetras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    var letra = "";
    console.log("El numero a validar es "+ numeroDNI+ " y tiene "+ numeroDNI.toString().length);
    if (numeroDNI.toString().length == 8) {
        if (typeof(numeroDNI) != "string") {
            var indice = numeroDNI % 23
            letra = tablaLetras[indice];
            return numeroDNI + letra;
        } else {
            console.log("DNI Invalido, debe ser solo numeros");
        }

    } else {
        console.log("DNI Invalido, debe ser de 8 numeros");
    }

}

//Numero Valido
console.log(calculaDNI(12312312));
//Numero Invalido
console.log(calculaDNI(1231231));
console.log(calculaDNI("1231231a"));
