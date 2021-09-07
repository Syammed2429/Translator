let displayTranlateValue = document.querySelector('.to-text-value')
// let translateToLang = document.querySelector('.translateToLang');
let fromTextValue = document.querySelector('.from-text-value');

let translateFromLang = () => {
    let translateFromLang = document.querySelector('.translateFromLang').value;
    return translateFromLang;

}


const getFromValue = () => {
    let fromTextValue = document.querySelector('.from-text-value').value;
    return fromTextValue;
}

let translateToLang = () => {
    let toTextValue = document.querySelector('.translateToLang').value;
    return toTextValue;
}



//creating a function to take the value from the Translate from options and passing it to the getData function

//creating a function to take the value from the Translate To options and passing it to the getData function
let toLang = () => {
    let translateToLang = document.querySelector('.translateToLang').value;
    console.log('translateToLang:', translateToLang)

}

//Adding the event to select the options from the Translate To
// translateToLang.addEventListener('change', toLang)

 


//Function to fetch the data and translate the input value
let getData = async (value,from,to) => {
console.log('value,from,to:', value,from,to)

    const res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
            q: value,
            source: from,
            target: to
        }),
        
        headers: { "Content-Type": "application/json" }
    });
    let result = await res.json();
    let resData = JSON.stringify(result.translatedText)
    console.log('resData:', resData)
    if(resData === undefined) {
        // console.log("WHat");
    return displayTranlateValue.innerHTML = '';

    }
    displayTranlateValue.innerHTML = resData;
    console.log('result from 208:', result)

}



let main = () => {
    let from = translateFromLang();
    let value = getFromValue();

    let to = translateToLang();
        
    getData(value,from,to);
    if(!value)  return   alert('Please enter the words you want to translate')


}


