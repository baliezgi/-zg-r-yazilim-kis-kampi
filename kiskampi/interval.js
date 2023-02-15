setTimeout(function(){
    alert("Merhaba");

},2000);

/*var id=setInterval(function(){
    console.log(parseInt(Math.random()*1000));
},100)*/
let kutu=document.getElementById("kirmizi-kutu");
counter=0;
topCounter=0;
var id=setInterval(function(){
    if(counter===350){
        if(topCounter===200){
            clearInterval(id);
        }else{
            kutu.style.top=topCounter+"px";
            topCounter++

        }
        
    }else{
        kutu.style.left=counter+"px";
        counter++
    }

},10)