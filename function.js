var termos= [undefined, undefined]
var numero = ""
var operacao = ""
var resultado = ""
var keepResultado = undefined

function pressNum (conteudo){
    numero = numero.concat(conteudo.innerHTML)
    showDisplay(conteudo.innerHTML)
    console.log(numero)
}

function pressOp (conteudo){
    console.log(conteudo.innerHTML)
    if(termos[1] == undefined){
        if(keepResultado == undefined){
            termos[0] = numero  
        }
        termos[1] = conteudo.innerHTML
        numero = ""
        showDisplay(conteudo.innerHTML)
    }else{
        termos[1] = conteudo.innerHTML
        clearDisplay()
        showDisplay(termos[0])
        showDisplay(conteudo.innerHTML)  
    }
}

function pressIgual(){
    if(termos[0] != undefined && termos[1] != undefined && numero != ""){
        switch(termos[1]){
            case '+':
                resultado = Number(termos[0]) + Number(numero)
                break
            case '-':
                resultado = Number(termos[0]) - Number(numero)
                break
             case '/':
                resultado = Number(termos[0]) / Number(numero)
                break
            case '*':
                resultado = Number(termos[0]) * Number(numero)
                break 
            case '%':
                resultado = Number(termos[0]) * (Number(numero) / 100)
                break   
            case '^':
                resultado = Number(termos[0]) ** Number(numero)
                break       
        }
        clearDisplay()
        showDisplay(resultado)
        keepResultado = resultado
        termos[0] = keepResultado
        termos[1] = undefined
    }
}

function showDisplay(conteudo){
    var display = document.getElementById('display');
    display.value += conteudo;
}

function clearMemory(){
    numero = ""
    resultado = ""
    termos= [undefined, undefined]
    keepResultado = undefined
}

function clearDisplay(){
    display.value= ""
}

function clearAll(){
    clearMemory()
    clearDisplay()
}