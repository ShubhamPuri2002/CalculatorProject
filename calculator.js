
var display1 = document.getElementById("display");
 

function seven(){
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
    
    display1.value+="7";
}

function allclear(){
    
    display1.style.fontSize="70"
    
    display1.value="";
}
 
function eight(){
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
    display1.value+="8";
}
function nine(){
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
    display1.value+="9";
}
function four(){
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
    display1.value+="4";
}
function five(){
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
    display1.value+="5";
}
function six(){
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
    display1.value+="6";
}
function one(){
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
    display1.value+="1";
}
function two(){
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
    display1.value+="2";
}
function three(){
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
    display1.value+="3";
}
function zero(){
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
    display1.value+="0";
}
function point(){
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }

    if(display1.value==""){
    display1.value="0.";}
    else if(display1.value.indexOf(".")>-1){
    display1.value+="";} 
    else{
    display1.value+=".";}
    
    
} 
function equal(){
    var output = eval(display1.value);
    display1.value=output;





    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
}
function plusminus(){
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
    var val=parseFloat(display1.value);
    var val1=-val;
    display1.value=val1;
}function percentage(){
    var val=display1.value;
    display1.value=val/100;
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
}function divide(){
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
    if(display1.value==""){
        display1.value="0/";}
    if (display1.value.endsWith("/") || display1.value.endsWith("*") || display1.value.endsWith("+") || display1.value.endsWith("-")) {
    display1.value+="";
    }
    else{ 
    var val=display1.value;
    
    display1.value+="/";}
}function multiply(){
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
    if(display1.value==""){
        display1.value="0*";}
        if (display1.value.endsWith("/") || display1.value.endsWith("*") || display1.value.endsWith("+") || display1.value.endsWith("-")) {
            display1.value+="";
            }
        else{
        var val=display1.value;
     
        display1.value+="*";}
}function minus(){
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
    if(display1.value==""){
        display1.value="0-";}
        if (display1.value.endsWith("/") || display1.value.endsWith("*") || display1.value.endsWith("+") || display1.value.endsWith("-")) {
            display1.value+="";
            }
        else{
        var val=display1.value;
        
        display1.value+="-";}
}function plus(){
    if(display1.value.length>8){
        display1.style.fontSize="40"
    }
    if(display1.value==""){
        display1.value="0+";}
        if (display1.value.endsWith("/") || display1.value.endsWith("*") || display1.value.endsWith("+") || display1.value.endsWith("-")) {
            display1.value+="";
            }
        else{
        var val=display1.value;
      
        display1.value+="+";}
}
