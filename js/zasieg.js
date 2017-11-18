//zmienne globalne,dostepne w calym skrypcie js

//zmienne lokalne,dostepne tylko wewnatrz funkcji
var liczba = 10;
var parametr5 = 30;



function policz() {
var liczba = 20;
console.log(liczba);
}

function pomnoz(parametr1, parametr2, parametr3) {
    var result;
    var parametr4 = 5;
    var parametr5 = 300;
    
    result = parametr1 * parametr2 * parametr3 * parametr4 * parametr5;
    
    return result;
}

console.log(pomnoz(3, 9, parametr5));