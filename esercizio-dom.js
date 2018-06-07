
var elementi = [];
var li = document.querySelectorAll("li");
var list = window.document.all;
var tot = 0;
/*
for (tot = 0; tot < list.length; tot++) {

    list[tot].id = tot;
    elementi.push(list[tot].tagName);

    console.log("L'elemento " + (tot+1) + " è un " + elementi[tot]);
}
*/
for (let i = 0; i < li.length; i++) {
    if(li[i].textContent != 0){
        console.log("Opzione "+ (i+1) + ": " + li[i].textContent);
    }
    
}
/*
console.log("La pagina è composta da " + tot + " elementi.");
*/