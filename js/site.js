//Event Listener Instantiation
document.getElementById("btnSubmit").addEventListener("click", getValues);

//get values from site
function getValues() {

    document.getElementById("alert").classList.add("invisible");


    //don't forget to set it equal to the element's VALUE
    let givenString = document.getElementById("userString").value;

    let reversedString = reverseString(givenString);

    displayMirror(reversedString);
}


//generate the reversed string
function reverseString(originalString) {

    let reversedString = "";

    for (let i = originalString.length - 1; i >= 0; --i) {
        reversedString += originalString[i];
    }

    return reversedString;
}

//display the string
function displayMirror(reversedString) {

    paragraph = document.getElementById("msg");

    paragraph.innerHTML += `Here is your reversed string: ${reverseString}`;

    document.getElementById("alert").classList.remove("invisible");
}