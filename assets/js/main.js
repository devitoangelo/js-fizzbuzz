
//colleghiamo la lista di html al nostro js
const elementList=document.getElementById("list")



// stampiamo i numeri da 1 a 100 
for (let i=1; i<=100; i++) {
    console.log(i);
    let markupList = `<li class="box box-${i}">${i}</li>`
    console.log(markupList);

   // per i multipli sia di 3 - 5 stampa FizzBuzz al posto del numero
    if (i % 3 ===0 &&i % 5 ===0){
        markupList = `<li style="background-color:red;" class="box box-${i}">fizzBuzz</li>`

       //per i multipli di 5 stampa Buzz al posto del nmero
    } else if (i % 5 ===0) {
        markupList = `<li style="background-color:yellow;" class="box box-${i}">Buzz</li>`

       //per i multipli di 3 stampa fizz al posto del numero
    } else if (i % 3 ===0) {
        markupList = `<li style="background-color:green;" class="box box-${i}">Fizz</li>`

    } 
    elementList.innerHTML += markupList
    }

 





