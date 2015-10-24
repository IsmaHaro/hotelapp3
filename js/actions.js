var fn = {
    init:function(){
       // alert();
        //var x = false;
        if (!fn.estaRegistrado())
            window.location.href = '#registro';
        $('#regSend').click(fn.getReg);
        $('#tomarFoto').click(mc.start());
    
    },

    deviceready: function(){
        document.addEventListener("deviceready", fn.init, false);
    },

    estaRegistrado: function(){
        if(window.localStorage.getItem('uuid') != undefined){
            return true;
        }

        return false;
    }
    
    getReg: function(){
       // var nom=document.getElementById('regNom').value;

        var nom  = $('#regNom').val();
        var tel  = $('#regTel').val();
        var mail = $('#regMail').val();
        var foto = $('#fotoTomada').attr("rel");
        
        if (nom!= '' && tel!= '' && mail!= '' && foto !=  undefined && foto != ''){
            //alert(nom + '-' + tel + '-'+ mail);
            fn.enviarRegistro(nom, mail, tel, foto);
        }
        else{
            navigator.notification.alert('Todos los campos son requeridos');
        }
    },
    enviarRegistro: function(nombre, mail, telefono, foto){
        $.ajax({
              method: "POST",
              url: "http://carlos.igitsoft.com/apps/test.php",
              data: { 
                nom: nombre,
                mail: mail,
                tel: telefono
              }
        }).done(function(msg){
            if(msg == 1){
                //ENVIAR FOTO
                ft.start(foto);
            }else{
                alert("Datos incorrectos");
            }
        });
    }
    
    
};
/*window.addEventListener("load",fn.init,false);*/
/*jQuery(dcoument).ready(fn.init);*/
//$(dcoument).ready(fn.init);

// COMENTAR LINEA DE ABAJO CUANDO
// LA APP ESTE LISTA PARA COMPILAR

//$(fn.init);

// DESCOMENTAR LINEA DE ABAJO CUANDO
// LA APP ESTE LISTA PARA COMPILAR

$(fn.deviceready);

