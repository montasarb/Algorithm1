var c 
var nv = 0 ;
var ne = 0 ;
var nc = 0 ;
do {
    c = prompt('Write a caracter')
    if (c == "a" || c == "e"|| c == "i" || c == "y" || c == "u" || c == "o" ){
        nv++
    }
    if (c === " "){
        ne++
    }
    else {
        nc++
    }
    str =str+c
}while (c!='.')
console.log('nombre de voyelle = ', nv)
console.log('nombre des mots  = ', ne+1)
console.log('nombre de caracteres = ', nc)
