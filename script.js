var amount=document.getElementById('amount').value;
var rate=document.getElementById("rate").value;
var years=document.getElementById('years').value;
var rateval= amount*rate*years/100;
var year = new Date().getFullYear()+parseInt(years);
function newrate(){
   var rato=document.getElementById("rate").value;
    document.getElementById("ratevalue").innerText=rato;
}
function compute(){
    document.getElementById("result").innerHTML="If you deposit "+amount+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}