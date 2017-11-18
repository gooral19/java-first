var osoba = {
    name: 'darek',
    height: 177,
    print: function() {
        console.log(this.name);
    }
}
//dostep do wlasciwosci
console.log(osoba.name + ' ' + osoba.height);

//dostep do metody
osoba.print();


//dodawanie wlasciwosci do obiektu i ich wyswietlanie/wywolanie funkcji,w kluczach nie podajemy nawiasow okraglych.
osoba.weight = 65;
osoba.printDetail = function() {
    return this.name + ' ' + this.height + ' ' + this.weight;
}

console.log(osoba.printDetail());

//tworzenie klas

class Osoba {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    
    wyswietlInfo() {
        console.log(this.imie + ' ' + this.nazwisko);
        
    }
}
var krystian = new Osoba('krystian', 'dziopa');
krystian.wyswietlInfo();
var krystian = new Osoba('marcin', 'nowak');
krystian.wyswietlInfo();
