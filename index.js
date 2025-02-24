const obj = [
    { macas: 3, peras: 3, carne: 1, frango: 5, doces: 2 },
    { macas: 1, cafes: 1, ovos: 8, frango: 1, paes: 4 },
    { macas: 3, peras: 2, carne: 1, frango: 5, doces: 2 },
    { macas: 3, peras: 3, carne: 1, frango: 5, doces: 2 },
];

const lista = [];

obj.forEach((item) => {
    const chaves = Object.keys(item);

    lista.push(...chaves);
});
console.log(lista)



var listaFiltrada = lista.filter((item, i) => {
    console.log(lista.indexOf(item), i, item);
    return lista.indexOf(item) === i;
});
console.log(listaFiltrada);