const selectTag = document.querySelectorAll('select');
const translatonBtn = document.querySelector('button');
const translateTxtFrom = document.querySelector('.from-text');
const translateTxtTo = document.querySelector('.to-text');
const exchangeBtn = document.querySelector('.exchange');
const icons = document.querySelectorAll('.row i');


selectTag.forEach((tag, idx) => {
    for(let country_code in countries){
        let selected;
        if(idx == 0 && country_code == 'pl-PL'){
            selected = 'selected';
        } else if(idx == 1 && country_code == 'en-GB') {
            selected = 'selected';
        }
    let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
    tag.insertAdjacentHTML('beforeend', option);
    }
});

exchangeBtn.addEventListener('click', () => {
    let tempText = translateTxtFrom.value;  
    let tempLang = selectTag[0].value;
    translateTxtFrom.value = translateTxtTo.value;
    translateTxtTo.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});


translatonBtn.addEventListener('click', () => {
    let text = translateTxtFrom.value;
    translateFrom = selectTag[0].value;
    translateTo = selectTag[1].value;
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${translateFrom}|${translateTo}`;

    fetch(apiUrl).then(res => res.json()).then(data => {
        translateTxtTo.value = data.responseData.translatedText;
    })
});

icons.forEach(icon => {
    icon.addEventListener('click', ({target}) => {
        if(target.classList.contains('fa-copy')){
            if(target.id == 'from'){
                navigator.clipboard.writeText(translateTxtFrom.value);
            } else {
                navigator.clipboard.writeText(translateTxtTo.value); 
            }
        } else {
            let utterance;
            if(target.id == 'from'){
                utterance = new SpeechSynthesisUtterance(translateTxtFrom.value);
                console.log(utterance);
                utterance.lang = selectTag[0].value;
        
            } else {
                utterance = new SpeechSynthesisUtterance(translateTxtTo.value); 
                utterance.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    });
})