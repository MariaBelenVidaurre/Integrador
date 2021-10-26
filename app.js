

do{
    var delito = prompt('Qué caso es?')
    var reduccion= 5
    if(delito=="homicidio"){
        var pena= 20
        let otravez= confirm('Es reincidente?')
        if(otravez==true){
            pena=pena-reduccion
             alert('Le corresponde'+pena+'años');
        }else{
            alert('Le corresponde'+pena+'años');
        }
    }else{
        alert=('ingrese otro')
    }
    var hayMas=confirm('Tienes otro caso?')
}while(hayMas== true)