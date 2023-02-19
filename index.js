const inputEl = document.getElementById("input")
const infoText = document.getElementById("inforText")
const meaningConEL = document.getElementById("meaningContainer")
const titleEL = document.getElementById("title")
const MeanEL = document.getElementById("meaning")
const audioEL = document.getElementById("audio")

async function fetchAPI(word){
try {
    infoText.style.display="block";
    meaningConEL.style.display="none";

    infoText.innerText = `Searching the meaning of "${word}"`;
    const url =`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const res = await fetch(url).then((res) => res.json());
    if(res.title){
        meaningConEL.style.display="block";
        infoText.style.display="none";
        titleEL.innerText = word;
        MeanEL.innerText = "N/A";
        audioEL.src = audioEL.style.display="none";
    }else{
    infoText.style.display="none";
    meaningConEL.style.display="block";
    audioEL.style.display="inline-flex"
    titleEL.innerText = res[0].word;
    MeanEL.innerText = res[0].meanings[0].definitions[0].definition;
    audioEL.src = res[0].phonetics[0].audio;
}
} catch (error) {
    console.log(error);
}
 

}


inputEl.addEventListener("keyup",(e)=>{
    if(e.target.value && e.key ==="Enter"){
        fetchAPI(e.target.value)
    }

})
