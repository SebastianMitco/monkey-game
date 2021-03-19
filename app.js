const closedEar = document.querySelector('.closed')
const openFace = document.querySelector('.open')
const clickText= document.querySelector('.text')
tired = ()=> {
    if(clickCount <19){
        document.querySelector('.text').innerHTML= "Click the monkey 20 times!"
        
    ;
    } else{document.querySelector('.text').innerHTML= "The monkey is tired"
    console.log("changed")
    closedEar.classList.remove('active')
    openFace.classList.remove('active')
    }
}

var clickCount=0;
tired();
document.querySelector('.clicks').innerHTML= clickCount;
addClick = ()=> {
clickCount++;
console.log(clickCount)
}


//Add event listener

closedEar.addEventListener('click',()=>{
    if(openFace.classList.contains('open')){
        openFace.classList.add('active');
        closedEar.classList.remove('active')
        tired();
    }
})

openFace.addEventListener('click',()=>{
    if(closedEar.classList.contains('closed')){
        closedEar.classList.add('active');
        openFace.classList.remove('active')
        tired();
    }
})




