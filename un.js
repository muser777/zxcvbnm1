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

    $.getJSON("zz.json", function(result){
        $.each(result, function(i, field){
      alert(field);
        });
      });

   }