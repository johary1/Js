//function

const faireUneTacheBis = () => {
    //console.log('nouvelle façon ecriture fonction ou fonction flechee');

}

//fonction dynamique à l'aide  de paramètre
const faireUneTache = (type) => {
    //console.log('je fais ' + type);

}

faireUneTacheBis();
faireUneTache('du gym');
faireUneTache('à manger');

const btn = document.querySelector('#btn');
const img = document.getElementById('img');

btn.addEventListener('click', ()=>{
    //img.classList.add('show');
    //img.classList.remove('show')
    //toggle fait les 2
    img.classList.toggle('show')
});
/*********** **/

const mouseEvent = document.querySelector('.mouseEvent');
const horizental = document.querySelector('.horizental');
const vertical = document.querySelector('.vertical');

mouseEvent.addEventListener('mousemove',(e) =>{
    horizental.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + '%';
    
    if(e.x > 500){
        document.body.style.filter ="blur(3px)";
        
    }else{
        document.body.style.filter ="none";
    }

});

/*********** **/
document.getElementById('input').addEventListener('input',(e)=>{
    vertical.innerHTML = e.target.value;
})

/************* */
const theme = document.querySelectorAll('theme');

theme.forEach((item) => {
    item.addEventListener('click',(e)=>{
        document.body.classList.remove("darkTheme","salmonTheme","yelloTheme");
        
        switch(e.target.id){
            case "dark" :
            document.body.classList.add("darkTheme");
            break;
            case "salmon" :
            document.body.classList.add("salmonTheme");
            break;
            case "yellow" :
            document.body.classList.add("yellowTheme");
            break;
            /*default:
            null;*/
    };
});
})

