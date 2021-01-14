


/* Animacion */
var byline = document.getElementById('byline');  
bylineText = byline.innerHTML;
bylineArr = bylineText.split('');
byline.innerHTML = '';

var span;
var letter;

for(i=0;i<bylineArr.length;i++){
  span = document.createElement("span");
  letter = document.createTextNode(bylineArr[i]);
  if(bylineArr[i] == ' ') {
    byline.appendChild(letter);
  } else {
span.appendChild(letter);
  byline.appendChild(span); 
  }
}
/* Formularios */

//FUNCION PARA VALIDAR LETRAS
function sololetras(e) {
  key=e.keyCode || e.which;

  teclado=String.fromCharCode(key).toLowerCase();

  letras="áéíóúqwertyuiopasdfghjklñzxcvbnm ";

  especiales="8-37-38-46-164-46";

  teclado_especial=false;

  for(var i in especiales){
      if(key==especiales[i]){
          teclado_especial=true;
          break;
      }
  }

  if(letras.indexOf(teclado)==-1 && !teclado_especial){
      return false;
  }
}


function Validacion()
{
  nom = document.getElementById("nombre").value;
  apell= document.getElementById("apellido").value;
  mail = document.getElementById("mail").value;
  pass = document.getElementById("password").value;

  if (nom == null || nom.length == 0 || /^\s+$/.test(nom)) {
    alert('Error! Debe completar el campo "nombre"');
  
    document.getElementById('nombre').value=""
    document.getElementById('nombre').focus();
    return false;
  }
  if (apell == null || apell.length == 0 || /^\s+$/.test(apell)) {
    alert('Error! Debe completar el campo "apellido"');
    document.getElementById('apellido').focus();
    document.getElementById('apellido').value="";
    return false;
  }
  if (
    mail == null ||
    mail.length == 0 ) 
    {
      alert("Error! Debe ingresar un mail válido");
      document.getElementById('mail').focus();
      document.getElementById('mail').value="";
      return false;
    }
  
  if (pass == null || pass.length == 0 || /^\s+$/.test(pass)) {
      alert('Error! password incorrecta');
      document.getElementById('password').focus();
      document.getElementById('password').value="";
      return false;
    }
  
    alert("Se a registrado la cuenta correctamente!");
    return true;
}


 