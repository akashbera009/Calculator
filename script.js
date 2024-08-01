let btnGroup=document.querySelectorAll('.btnGroup button')  // or numeric 
let clicked_array=''
let result=''
let displayItem=document.querySelector('.displayItems')
document.querySelector('.btnGroup').addEventListener('click',(e)=>{
    document.querySelector('.result').classList.add('display_none')
// handels ac ,back , equal
    if(e.target.getAttribute('class')==='special' || e.target.getAttribute('id')==='back'){
        if(e.target.getAttribute('id')==='back'){
            clicked_array=clicked_array.substring(0,clicked_array.length-1)
        }
        else if(e.target.getAttribute('id')==='ac'){
            clicked_array=''
            displayItem.innerHTML='0';
        }
        else if(e.target.getAttribute('id')==='equals'){
            try{
                document.querySelector('.result').classList.add('display_none')
                result=math.evaluate(clicked_array)
                if(!Number.isInteger(result)){
                    result=result.toFixed(4);
                }
                document.querySelector('.result').classList.remove('display_none')
                document.querySelector('.result').innerHTML=result;
            }catch(e){
                console.log('error calculation');
                // clicked_array+='Calculation ERROR!';
            }
            console.log(result);
            clicked_array=''
        }
    }
// handels digits 
    else if(e.target.getAttribute('class')==='digit'){
        clicked_array+=e.target.innerHTML;
    }
// handels operator 
    else{
        if(clicked_array[clicked_array.length-1]=='*' ||clicked_array[clicked_array.length-1]=='÷' || clicked_array[clicked_array.length-1]=='+' || clicked_array[clicked_array.length-1]=='-'){
            console.log('tapped operator twice');
            clicked_array=''    
        }
        else{
            clicked_array+=e.target.innerHTML
        }
    }
    if(clicked_array){ 
        displayItem.innerHTML=clicked_array;
        console.log(clicked_array);
    }else{
        displayItem.innerHTML='';
        console.log('0 due to nothing');
    }
})
