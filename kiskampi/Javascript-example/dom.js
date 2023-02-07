const var1 = {
    isim: "Ege",
    yas: 23,
    selamVer: function selam() {
        alert("Selamlar");
    },
    gozlukTakiyor: true,
}

/*
console.log(var1.isim);
console.log(var1.yas);
console.log(var1.gozlukTakiyor);

var1.selamVer();
*/

const h1Tagim = document.getElementsByTagName("h1")[0];
console.log(h1Tagim.innerHTML);

h1Tagim.innerHTML = "Değiştirilmiş Javascript";

for (let i = 0; i < 5; i++) {
    h1Tagim.innerHTML = h1Tagim.innerHTML + " " + i;
}

const h2Tagim = document.getElementsByClassName("kirmizi")[0];

console.log(h2Tagim);

console.log(h2Tagim.style);

h2Tagim.style.color = "green";

const h3Tagim = document.getElementById("ozel");

console.log(h3Tagim);


if (h2Tagim.style.color === "red") {
    h3Tagim.style.color = "blue";
}
else if (h2Tagim.style.color === "green") {
    h3Tagim.style.color = "red";
}
else {
    h3Tagim.style.color = "magenta";
}

const dugmeTagi = document.getElementById("dugme");
const miktarTagi = document.getElementById("miktar");
const metinTagi = document.getElementById("metin");

let miktar = 0;
let fontBuyuklugu = 1;

dugmeTagi.onclick = function () {
    miktar += 1;
    miktarTagi.innerHTML = "Bana ÅŸu kadar tÄ±kladÄ±nÄ±z: " + miktar;
    fontBuyuklugu += 0.1;
    metinTagi.style.fontSize = fontBuyuklugu + "em";


}


let newHeader=document.createElement("h4");
console.log(newHeader);
newHeader.innerHTML="Ben js ile oluşturuldum";

let body=document.getElementsByTagName("body")[0];

body.appendChild(newHeader);

//console.log(body.children);

newHeader.classList.add("kirmizi");

body.replaceChild(newHeader,h1Tagim);

const form=document.getElementById("benim-formum");

const carList= document.getElementById("araba-listem")
 form.onsubmit=function(event){
    event.preventDefault();
    const li = document.createElement("li")
    li.innerHTML =document.forms["araba-formum"]["araba"].value;
    carList.appendChild(li);

 }

 const toDoForm= document.forms["to-do-form"];
 const toDoTable=document.getElementById("to-do-tablosu");

 let idCounter=0;


 toDoForm.onsubmit=function(event){
    event.preventDefault();
    let itemName= document.forms["to-do-form"]["gorev"].value;

    let row=document.createElement("tr");

    let itemNameNode = document.createElement("td");
    let comletedStatusNode=document.createElement("td");
    let deleteTaskNode= document.createElement("td");
    let completedTaskNode=document.createElement("td");

    let deleteTaskButton=document.createElement("button");
    let completedTaskButton=document.createElement("button");


    deleteTaskButton.innerHTML="Görevi Sil";
    completedTaskButton.innerHTML="Görevi tamamla";

    deleteTaskNode.appendChild(deleteTaskButton);
    completedTaskNode.appendChild(completedTaskButton);

    completedTaskButton.onclick=function(event){
        event.preventDefault();
        console.log(this);
        let completedStatus= this.parentNode.parentNode.children[1];
        completedStatus.innerHTML="Görev Tamamlandı";

    };

    deleteTaskButton.onclick=function(event){
        event.preventDefault();

        let rowToDelete= this.parentNode.parentNode;
        toDoTable.removeChild(rowToDelete);

        

    };


    itemNameNode.innerHTML=itemName;
    comletedStatusNode.innerHTML="tamamlanmadı";


    row.appendChild(itemNameNode);
    row.appendChild(comletedStatusNode);
    row.appendChild(deleteTaskNode);
    row.appendChild(completedTaskNode);

    toDoTable.appendChild(row);
 }







