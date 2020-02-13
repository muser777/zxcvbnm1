$(document).ready(function(){

   
      tipppdisposi();
  });
/*

  $("button").click(function(){
  
  });*/


  function tipppdisposi(){

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {

            
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {

            
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };


    if(isMobile.any()) {
        console.log('Esto es un dispositivo móvil, si especificar cuál');
        exewinsi() ;
      }

      else{

        exewinsi() ;


      }
      if(isMobile.Android()) {
        console.log('Esto es un dispositivo Android');
      }
      if(isMobile.BlackBerry()) {
        console.log('Esto es un dispositivo BlackBerry');
      }
      if(isMobile.iOS()) {
        console.log('Esto es un dispositivo iOS');
      }
      if(isMobile.Opera()) {
          
        console.log('Esto es un dispositivo Opera');
      }
      if(isMobile.Windows()) {
        console.log('Esto es un dispositivo Windows');
      }




  }


  function  exewinsi() { 
alert("listos");
    $.getJSON("zz.json", function(result){
        $.each(result, function(i, field){

            myFunction(field.substring(6,14));
     
        });
      });

   }

  var varentrarr=[] ;
function myFunction(st) { 
    console.log(varentrarr=getGET());
    varentrarr=getGET();

 if(varentrarr.vart==st){
    alert("varentrarr.vart iguales");
 }
 else{
     alert(varentrarr.vart);
 }
    
}
    
     function getGET()
        {
            // capturamos la url
            var loc = document.location.href;
            // si existe el interrogante
            if(loc.indexOf('?')>0)
            {
                // cogemos la parte de la url que hay despues del interrogante
                var getString = loc.split('?')[1];
                // obtenemos un array con cada clave=valor
                var GET = getString.split('&');
                var get = {};
                // recorremos todo el array de valores
                for(var i = 0, l = GET.length; i < l; i++){
                    var tmp = GET[i].split('=');
                    get[tmp[0]] = unescape(decodeURI(tmp[1]));
                }
                return get;
            }
        }