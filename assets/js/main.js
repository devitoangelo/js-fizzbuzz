
//colleghiamo la lista di html al nostro js
const elementList=document.getElementById("list")

// stampiamo i numeri da 1 a 100 
for (let i=0; i<=100; i++) {
    console.log(i);
    const markupList = `<li class="box box-${i}">${i}</li>`
    console.log(markupList);

    elementList.innerHTML += markupList
}