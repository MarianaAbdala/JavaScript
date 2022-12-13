function numerosAleatorios(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
 
function ordenar() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(numerosAleatorios(1, 100));
    }
 
    console.log("Números desordenados");
    console.log(array);

    array.sort(function (a, b) { return a - b });
 
    console.log("Números ordenados");
    console.log(array);
 
    let ul = document.createElement("ul");

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let li = document.createElement("li");
        let textLi = document.createTextNode(element);
        li.appendChild(textLi);
        ul.appendChild(li);
 
    }
    
    let valores = document.getElementById("valores");
    valores.appendChild(ul);
 
}
 
window.onload = ordenar;