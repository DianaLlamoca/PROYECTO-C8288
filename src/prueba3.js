//Tarea para probar la función que se encargará de calcular el factorial
function factorial(n) {
    if (n === 0 || n === 1){
      return 1;
    }
    else {
      return n * factorial(n - 1);
    }
}

//Exporto la función
module.exports=factorial;
