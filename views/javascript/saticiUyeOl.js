
$(document).ready(function () {


    

    $("#saticiUyeOl_Onayla").on('click', function (e) {
        e.preventDefault();
        var saticiKullaniciIsmi = $("#saticiKullaniciAdi").val().trim();
        var saticiEmail = $("#saticiEmail").val().trim(); 
        var saticiFirmaIsmi = $("#saticiFirmaIsmi").val().trim(); 
        var saticiYetkiliKisi = $("#saticiYetkiliKisi").val().trim(); 
        var saticiYetkiliTelefon = $("#saticiYetkiliTelefon").val().trim(); 
        var saticiYetkiliEmail = $("#saticiYetkiliEmail").val().trim(); 
        var createNewAccount = [saticiKullaniciIsmi,saticiEmail,saticiFirmaIsmi,saticiYetkiliKisi,saticiYetkiliTelefon,saticiYetkiliEmail]; 

        for(var i=0; i < createNewAccount.length; i++){
            console.log(createNewAccount[i]); 
        }


        $.ajax({
            Method: "POST",
            URL: "url here",
            Data: createNewAccount 
        }).then(function(){
            console.log("Post is done, new account created, check your email address"); 
        }); 
    })

});


