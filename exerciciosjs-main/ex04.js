for(let i = 1; i <= 10; i++) {
    console.log(i);
}

for(let i2 = 10; i2 >= 1; i2--) {
    console.log(i2);
}

for(let par = 0; par <=10; par++) {
    if (par % 2 === 0) {
        console.log(par)
    }
}

//Tabuada do 3
for(tabuada = 1; tabuada <= 10; tabuada++) {
    console.log('3 x ' + tabuada + ' = ' + (3 * tabuada))
}

//somar números
result = 0
for(soma = 1; soma <= 30; soma++){
    result += soma;
}
console.log(result);