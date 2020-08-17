var serie = document.getElementById('serie')
var contador=0;
serie.oninput = function() {

if(this.value.length==0 || this.value==null || this.value=="" ){
    contador=-1;
}
let tamanho=this.value.length  
  if(contador==2){
       this.value +='.'
        contador=0     
}else{
    contador=contador+1
}
}

var product = JSON.parse(localStorage.getItem('product'))
if(product == null){
    product = []
   }

function saveCad(){

    var serie = document.getElementById('serie').value
    var prod = document.getElementById('prod').value
    var quanti = document.getElementById('quanti').value
    var tipoProd = document.getElementById('tipoProd').value
    var caracter = document.getElementById('caracter').value

    product.push({
        serie: serie,
        prod: prod,
        quanti: quanti,
        tipoProd: tipoProd,
        caracter: caracter
    })

    var json_prod = JSON.stringify(product)
    localStorage.setItem('product', json_prod)
}






