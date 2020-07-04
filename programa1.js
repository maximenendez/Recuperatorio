

document.getElementById("submi").onclick=function(){
    
  var r1 = document.getElementById("res1");
  var r5 = document.getElementById("res5");
  
  var cont=0
 
  
  var respuesta1 = document.getElementById("1");
  var respuesta2 = document.getElementById("2");
  var respuesta3 = document.getElementById("3");
  var respuesta4 = document.getElementById("4");
  var respuesta5 = document.getElementById("5");
  var score = document.getElementById("nota");
  
 if(r1.checked)
 {
  respuesta1.innerHTML="CORRECTO!! Belgrano creo la bandera"  ;
  cont++;
  
 }
 else{
  respuesta1.innerHTML="Lo siento... Respuesta uno contestada incorrectamente. Era belgrano.";
 }

 if(document.getElementById("res2").value == "1788"   )
{ 
  respuesta2.innerHTML+="CORRECTO!! 1788 es el año en que nacio san martin";
  cont++;
}
else{
  respuesta2.innerHTML+="INCORRECTO!! 1788 es el año en que nacio san martin";
}
if(document.getElementById("res3").value == "1852-02-03")
{ 
  respuesta3.innerHTML+="CORRECTO!! 3 de febrero de 1852 se libro la batalla de caseros";
  cont++;
}
else{
  respuesta3.innerHTML+="INCORRECTO!!3 de febrero de 1852 se libro la batalla de caseros";
}

if(document.getElementById("anio").value == "1912")
{ 
  respuesta4.innerHTML+="CORRECTO!! En 1912 se sanciono la ley saenz peña";
  cont++;
}
else{
  respuesta4.innerHTML+="INCORRECTO!!En 1912 se sanciono la ley saenz peña";
}
    
if(r5.checked)
 {
  respuesta5.innerHTML+="CORRECTO!! 1978 es la fecha correcta";
  cont++;
 }
 else{
  respuesta5.innerHTML+="Lo siento... Respuesta cinco contestada incorrectamente. Era en 1978.";
 }


if(cont>=3)
{
  score.innerHTML="Aprobaste, acertaste " + cont +" de 5 ";
}
if(cont<3)
{
  score.innerHTML="Desaprobaste, acertaste " + cont +" de 5 ";
}

}

document.getElementById("restablecer").onclick=function(){

  var respuesta1 = document.getElementById("1");
  var respuesta2 = document.getElementById("2");
  var respuesta3 = document.getElementById("3");
  var respuesta4 = document.getElementById("4");
  var respuesta5 = document.getElementById("5");
  var score = document.getElementById("nota");

respuesta1.innerHTML=" ";
respuesta2.innerHTML=" ";
respuesta3.innerHTML=" ";
respuesta4.innerHTML=" ";
respuesta5.innerHTML=" ";
score.innerHTML=" ";
}