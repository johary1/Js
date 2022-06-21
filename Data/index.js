const array = ['Paris','Lyon','Montreal','Bordeaux'];
console.log(array);

for(i=0;i<array.length;i++){
    console.log(array[i]);
    console.log(typeof array[i]);
}
array.sort();
console.log(array);

//********************* */
const input = document.getElementById('input');
const video = document.getElementById('video');
let link=""
input.addEventListener('input',(e)=>{
    changeLink(e.target.value);
    if(link){
        video.innerHTML = `<iframe width="560" height="315" src=${link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }

    
   
})
const changeLink = (linkToChange)=>{
    let embed = linkToChange.replace('watch?v=','embed/');
    link = embed.split('&')[0];
}

/**url cours : https://www.youtube.com/watch?v=QB1DTl7HFnc */