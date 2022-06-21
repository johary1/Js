const quote = document.getElementById('quote');

const getQuote = () => {
    //fetch : va chercher les data
    fetch("https://api.quotable.io/random")
    // récupère et formate en json le res
        .then((res) => res.json())
        .then((data) => {
        quote.innerHTML = data.author + `<br>` +data.content
    })
};

quote.addEventListener('click',()=>getQuote())
getQuote();


   
  