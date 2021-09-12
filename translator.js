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

}

//Function to fetch the data and translate the input value
let getData = async (value, from, to) => {

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
    if (resData === undefined) {
        return displayTranlateValue.innerHTML = '';

    }
    displayTranlateValue.innerHTML = resData;

}

let main = () => {
    let from = translateFromLang();
    let value = getFromValue();

    let to = translateToLang();

    getData(value, from, to);
    if (!value) return alert('Please enter the words you want to translate')
}


