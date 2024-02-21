

// stampiamo i numeri da 1 a 100
const elementList=document.getElementById("list")

for (let i=0; i<=100; i++) {
    console.log(i);
    elementList.innerHTML+= ` <li>${i}</li>`
}