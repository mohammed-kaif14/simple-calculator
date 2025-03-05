let display = document.getElementById('display');



function appendtoDisplay(input){
  display.value += input;
}

function deletenum(){
  display.value = display.value.toString().slice(0,-1);
}

function cleardisplay(){
  display.value = ""
}

function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}

function percentage(){
  let percent = eval(display.value)/100;
  display.value = percent;
}