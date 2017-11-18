
if ('2' === 2) {
    console.log('prawda');
}else if ('2' == 2) {
    console.log('"2" == 2');
}
else {
    console.log('nieprawda');
}


//switch
var kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
            console.log('wybrales czerwony');
        break;
    case 'zielony':
            console.log('wybrales zielony');
        break;
    case 'bialy':
            console.log('wybrales bialy');
            break;
        default:
        console.log('jestes daltonista');
        
}

