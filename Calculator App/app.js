function getNumber (num){    
    var results = document.getElementById("result");
    results.value += num;
   
}

function getResult (){
    var results = document.getElementById("result");
    results.value = eval(results.value);
}

function clearResult(){
    var clearBtn = document.getElementById("result");
    clearBtn.value = " "
}

function removeNum(){
    var removeNum = document.getElementById("result");
    removeNum.value = removeNum.value.toString().slice(0,-1) 
}