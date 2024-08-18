let calBtn = document.getElementById("cal-btn");

calBtn.addEventListener("click", function(){
    let b = getValueByID("base");
    let h = getValueByID("height");
    
    let area = 0.5 * b * h;
    
    function showValue(showField, showValue){
        let displayShow = document.getElementById(showField).innerText;
        displayShow = showValue;
    }
    showValue("display-value", area);
})