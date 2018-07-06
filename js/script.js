
  (function contador(){

    function numeros(){
      var contador = 0;

      var saludo = function(){
        contador++;
        console.log(contador);

        //setTimeout(saludo, 1500);
      };
        //saludo();

        //interval

        let intervalo = setInterval(saludo, 1500);

        document.querySelector('#btn').addEventListener('click', function(){
          clearInterval(intervalo);
        })
    }

    numeros();


  }())
