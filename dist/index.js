var display= document.getElementById('display');
function myClick(a){
display.value+=a;
}

function calculate(){
    document.getElementById('display').value=eval(document.getElementById('display').value);
}
 function myClear(){
     console.log('button clicked')
    document.getElementById('display').value='';
 }

 function myDel(){
     var x =document.getElementById('display').value;
     document.getElementById('display').value=x.substr(0,x.length-1);
 }
function myPercentage(){
    document.getElementById('display').value=(document.getElementById('display').value)/100
}
 