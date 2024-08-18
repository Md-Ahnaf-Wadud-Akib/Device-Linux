function getValueByID(inputId){
    let inputField = document.getElementById(inputId);
    let inputFieldValue = inputField.value;
    let inputValue = parseFloat(inputFieldValue);
    return inputValue;

    
}