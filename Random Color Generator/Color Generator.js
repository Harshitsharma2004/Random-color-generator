const getColor = () => {
    //hex code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = '#' + randomNumber.toString(16);
    document.getElementById("Color").value = randomCode;
    document.body.style.backgroundColor = randomCode;



}


document.getElementById("btnn").addEventListener("click", getColor);



const copyCode = () => {
    navigator.clipboard.writeText(document.getElementById("Color").value);

}

document.getElementById("btnn1").addEventListener("click", copyCode);