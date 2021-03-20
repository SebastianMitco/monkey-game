const closedEar = document.querySelector('.closed')
const openFace = document.querySelector('.open')
const clickText= document.querySelector('.text')
const btn= document.querySelector('.btn')
const reload= document.querySelector('.reload')
tired = ()=> {
    if(clickCount <19){
        document.querySelector('.text').innerHTML= "Click the monkey 20 times!"
    ;
    } else{document.querySelector('.text').innerHTML= "<h4>The monkey is tired!<h5> <br><h4>Reload the page to get another monkey.<h3>"
    console.log("changed")
        if(btn.classList.contains('btn')){
            btn.classList.add('closed')
        };
        if(reload.classList.contains('reload')){
            reload.classList.remove('closed')
        }
    }
}

var clickCount=0;
tired();

addClick = ()=> {
clickCount++;
document.querySelector('.clicks').innerHTML= clickCount;
console.log(clickCount)
}


//Add event listener
reload.addEventListener('click',()=>{
    location.reload();
})
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




