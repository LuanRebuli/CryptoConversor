const button = document.getElementById('convert-button')
const select = document.getElementById('select-currency')
const selectcrypto = document.getElementById('select-crypto')

const slpValueInDolar = 0.028
const slpValueInReal = 0.11
const bitcoinValueInDolar = 0.000023
const bitcoinValueInReal = 0.0000041

const convertValues = () => {
    const inputCrypto = document.getElementById('input-crypto').value
    const cryptoValue = document.getElementById('crypto-value-text')
    const currencyValue = document.getElementById('currency-value-text')
    
    cryptoValue.innerHTML = inputCrypto

    if(select.value === "US$ Dólar americano" & selectcrypto.value === "Bitcoin") {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD",
        }).format(inputCrypto / bitcoinValueInDolar)
    }

    if(select.value === "R$ Real" & selectcrypto.value === "Bitcoin") {
        currencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL",
        }).format(inputCrypto / bitcoinValueInReal)
    }

    if(select.value === "US$ Dólar americano" & selectcrypto.value === "SLP") {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD",
        }).format(inputCrypto * slpValueInDolar)
    }

    if(select.value === "R$ Real" & selectcrypto.value === "SLP") {
        currencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL",
        }).format(inputCrypto * slpValueInReal)
    }
};
changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.getElementById('currency-image')

    if(select.value === 'R$ Real') {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil.png"
    }
    if(select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }
    convertValues()
}

changeCurrencyCrypto = () => {
    const CryptoImage = document.getElementById('crypto-image')
    const CryptoName = document.getElementById('currency-name-crypto')

    if(selectcrypto.value === 'Bitcoin') {
        CryptoName.innerHTML = "Bitcoin"
        CryptoImage.src = "./assets/bitcoin.png"
    }
    if(selectcrypto.value === 'SLP') {
        CryptoName.innerHTML = "Smooth Love Potion"
        CryptoImage.src = "./assets/slp.png"
    }
    convertValues()
}


button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
selectcrypto.addEventListener('change', changeCurrencyCrypto)