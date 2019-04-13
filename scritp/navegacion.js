$("#userDatos").on('click',function (){routing('datosUsuario')});

function routing(ruta){
    $("#frmPrincipal").load('./view/'+ruta+'.html');
}