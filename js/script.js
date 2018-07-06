(function IFEE() {
  //Uso estricto
  'use strict'
  function accountant() {
    /*
     *lexical Scope
     *Variables con Scope global
    */
    let contConsole = document.querySelector('#contenedorContador');
    let btnIncrease = document.querySelector('#btnIncremento');
    let btnDecrement = document.querySelector('#btnDecremento');
    let intervals;
    let number = 0;
    let increase = false;
    let decrease = false;
    let htmlDecrease = `<h1>DECREMENTO</h1>`;

    function btninc() {
      if (increase) {
        number++;
        var valor = `${htmlDecrease}
        ${number}
        `;
      }

      if (decrease) {
        number--;
      }

      contConsole.textContent = valor;
      console.log(number);
      return number;
    };

    function interval() {
      intervals = setInterval(btninc, 1000);
    }

    interval();

    btnIncrease.addEventListener('click', function () {
          console.log('clicked');
          increase = true;
          decrease = false;
        });

    btnDecrement.addEventListener('click', function () {
        console.log('cliked');

        increase = false;
        decrease = true;
      });

  }

  accountant();

}());
