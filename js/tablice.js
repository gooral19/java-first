//tablice
//indeksowanie od 0


var tablica = [10, 'darek', 30, 40];
console.log(tablica);
console.log((tablica)[1]);


//dodanie wartosci na koniec tablicy za pomoca indeksu ostatniego emlementu +1
tablica[4] = 'anna';
console.log(tablica);


//dodawanie wartosci do tablicy za pomoca metody push()
tablica.push(50, 'michal');
console.log(tablica);

//metoda pop() usuwa ostatni element z tablicy

tablica.pop();
console.log(tablica);

//unshift() wstawia nowy element na poczatku tablicy
tablica.unshift('robert', 105);
console.log(tablica);

//shift() usuwa tylko pierwszy element z tablicy i go zwraca
tablica.shift();
console.log(tablica);

//.length zwraca dlugosc tablicy
console.log(tablica.length);

//join sluzy do laczenia kolejnych elementow w jeden tekst
console.log(tablica.join('-'));

//reverse odwraca kolejnosc elem tablicy
console.log(tablica.reverse());
console.log(tablica);

//sort sluzy do sortowania tablica
console.log(tablica.sort());
console.log(tablica);


