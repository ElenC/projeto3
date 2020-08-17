
function inserirTab(){
    var inserir = JSON.parse(localStorage.getItem('product'))
    if(inserir == null){
        inserir = []
       }

   var tabela = document.getElementById("tabela-principal")


   for(var i=0; i<inserir.length; i++){

    tabela.innerHTML += "<tr><td>"+inserir[i].serie+"</td><td>"+inserir[i].prod+"</td><td>"+inserir[i].quanti+"</td><td>"
    +inserir[i].tipoProd+"</td><td>"+inserir[i].caracter+"</td></tr>"

   }
}