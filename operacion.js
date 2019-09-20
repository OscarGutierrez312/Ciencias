function matrizAd(){
   
    $.getJSON("matrizAd.json", function(json) {
        
        console.log(json)
        var matriz=Object.values(json)
        
        return matriz
    });

    
    
}

function calcMatPesos(){
    var imprimir=document.getElementById("op")
        imprimir.innerHTML= matrizAd()
}