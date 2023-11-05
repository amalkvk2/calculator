function display(num){
inp.value+=num

}


function clearAll(){
    inp.value=""
}

function evaluateExp(){inp.value=eval(inp.value)


}



function removeLast(){

    currentvalue=inp.value
    inp.value= currentvalue.slice(0,-1)

}