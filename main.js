//T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E,
var calculaDNI= function(numeroDNI){
	var tablaLetras= ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
	var letra="";
	console.log(typeof(numeroDNI) );
	if (numeroDNI.toString().length <=8){
			if (typeof(numeroDNI)!="string"){
				var indice = numeroDNI%23
				letra = tablaLetras[indice];
				return letra;
			}
			
	}else{
	alert ("DNI Invalido");
	}

	}

console.log(calculaDNI("1231231"));