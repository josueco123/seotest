/*
*
* SEO
* create-demo3
* Modulo creacion y cnsulta de demos
* 18-10-2023
*
*/
(function (window) {
    'use strict';
    // This function will contain all our code
    function demos() {
        var _demosConstruct = {};

        _demosConstruct.init = function () {
            setData();
        }

        var settings = {
            url_domain: buildURL2(),
            key_site_captcha: '6LdGdPkaAAAAAICNuY4FEbRr0tAkDg9I_CgSI3Cf',
        };

        function buildURL2(){
            let mystring    = "";
            let myUrl       = "";
            let myHost      = "";

            myHost = window.location.hostname;
            let myArray = myHost.split('.');
            myArray.shift();
            myArray.pop();

            myUrl = myArray.toString().replace(",",".");

            // if (myUrl === "datacrm"){
            //     mystring = window.origin + '/';
            // }else{
            //     myUrl = window.location.origin + window.location.pathname;
            //     let myindex = myUrl.indexOf("public/");
            //     mystring = myindex != -1 ? myUrl.substring(0, myindex + 7) : myUrl;
            // }

            if (myUrl === "datacrm"){
                mystring = window.origin + '/';
            }

            myUrl = window.location.origin + window.location.pathname;

            let myindex = myUrl.indexOf("public/");
            if (myindex != -1){
                mystring = myUrl.substring(0, myindex + 7)
            }

            return mystring;
        }

        var setData = function () {
            registerSubmitPopup1();             // modals.blade.php
            initModals();
        }
        function initModals(){

            $("#modalPruebaGratis3").on('hidden.bs.modal', function () {
                /*
                leam
				alert("Esta accion se ejecuta al cerrar el modal o perder el foco con click " + $("#modalPruebaGratis3").css("display"))
                alert("Esta accion se ejecuta al cerrar el modal o perder el foco con click " + $("#modalemail2").css("display"))
                */
                $("#modalPruebaGratis3 #modalcontent1").css("display", "block");
                $("#modalPruebaGratis3 #modalemail2").css("display", "none");
			});
            $("#modalPruebaGratis3 #modalemail2 #access_crm").on("click", function  (){
                $("#modalPruebaGratis3").trigger("click");

            });

            $("#modalPruebaGratis3 #modalemail2 #recover_password").on("click", function  (){
                $("#modalPruebaGratis3").trigger("click");

            });
        }
        //
        //
        //
        function registerSubmitPopup1() {
            //Solicitar nuevo demo - No modal
            jQuery("#api_popup_demo.modalDemo").on("submit", function (e) {
                e.preventDefault();
                findDemo2();
            });
        }

        function cleanName(myText){

            myText = myText
                .replaceAll("á", "a")
                .replaceAll("à", "a")
                .replaceAll("ä", "a")
                .replaceAll("â", "a")
                .replaceAll("ª", "a")
                ;

            myText = myText
                .replaceAll("Á", "A")
                .replaceAll("À", "A")
                .replaceAll("Â", "A")
                .replaceAll("Ä", "A")
                ;

            myText = myText
                .replaceAll("é", "e")
                .replaceAll("è", "e")
                .replaceAll("ë", "e")
                .replaceAll("ê", "e")
                ;

            myText = myText
                .replaceAll("É", "E")
                .replaceAll("È", "E")
                .replaceAll("Ê", "E")
                .replaceAll("Ë", "E")
                ;

            myText = myText
                .replaceAll("í", "i")
                .replaceAll("ì", "i")
                .replaceAll("ï", "i")
                .replaceAll("î", "i")
                ;
            myText = myText
                .replaceAll("Í", "I")
                .replaceAll("Ì", "I")
                .replaceAll("Ï", "I")
                .replaceAll("Î", "I")
                ;
            myText = myText
                .replaceAll("ó", "o")
                .replaceAll("ò", "o")
                .replaceAll("ö", "o")
                .replaceAll("ô", "o")
                ;
            myText = myText
                .replaceAll("Ó", "O")
                .replaceAll("Ò", "O")
                .replaceAll("Ö", "O")
                .replaceAll("Ô", "O")
                ;
            myText = myText
                .replaceAll("ú", "u")
                .replaceAll("ù", "u")
                .replaceAll("ü", "u")
                .replaceAll("û", "u")
                ;
            myText = myText
                .replaceAll("Ú", "U")
                .replaceAll("Ù", "U")
                .replaceAll("Û", "U")
                .replaceAll("Ü", "U")
                ;

            myText = myText.replaceAll("ñ",'n');
            myText = myText.replaceAll("Ñ",'N');

            myText = myText.replaceAll("ç",'c');
            myText = myText.replaceAll("Ç",'C');

            myText = myText
            .replaceAll('#','')
            .replaceAll('-','')
            .replaceAll('$','')
            .replaceAll('&','')
            .replaceAll('~','')
            .replaceAll('@','')
            .replaceAll('&','')
            .replaceAll('!','')
            .replaceAll('·','')
            .replaceAll('|','')
            .replaceAll('%','')
            .replaceAll('/','')
            .replaceAll('!','')
            .replaceAll('(','')
            .replaceAll('(','')
            .replaceAll(')','')
            .replaceAll('(','')
            .replaceAll('?','')
            .replaceAll("'",'')
            .replaceAll('¡','')
            .replaceAll('¿','')
            .replaceAll('[','')
            .replaceAll('^','')
            .replaceAll('<code>','')
            .replaceAll(']','')
            .replaceAll('+','')
            .replaceAll('}','')
            .replaceAll('{','')
            .replaceAll('¨','')
            .replaceAll('´','')
            .replaceAll('>','')
            .replaceAll('<','')
            .replaceAll(';','')
            .replaceAll(',','')
            .replaceAll(':','')
            .replaceAll('.','')
            .replaceAll(" ",'')
            .replaceAll("°",'')
            .replaceAll("¬",'')
            ;

            return myText;
        }
        //
        // modals.blade.php
        //
        function hideErrors() {
            $("#errorsFormDemo3").css("display", "none");
        }
        //
        // modals.blade.php
        //
        function showErrors() {
            $("#errorsFormDemo3").css("display", "block");
        }
        //
        // modals.blade.php
        //
        function disableButtonPopup1() {
            $("#api_popup_demo.modalDemo").find("button").attr("disabled", true);
        }
        //
        // modals.blade.php
        //
        function enableButtonPopup1() {
            $("#api_popup_demo.modalDemo").find("button").attr("disabled", false);
        }

                //
        // modals.blade.php
        // modals-email
        //
        function findDemo2() {
            hideErrors();
            disableButtonPopup1();
            var email               = $("#api_popup_demo.modalDemo #email").val();
            var company             = $("#api_popup_demo.modalDemo #company").val().replace("&", "");
            var companyName         = $("#api_popup_demo.modalDemo #company").val();
            var sector              = $("#api_popup_demo.modalDemo #sector").val();
            var telefono            = iti.getNumber().substr(1);
            var personas            = $("#api_popup_demo.modalDemo #personas").val();
            var gclid               = $("#api_popup_demo.modalDemo #ad_gclib").val();
            var campaign            = "SEO 2024";
            var campaignid          = $("#campaignid").val();
            var _token              = $("#api_popup_demo [name='_token']").val();
            var captcha             = $("#captcha").val();
            var captchaNumberOne    = $("#captchaNumberOne").val();
            var captchaNumberTwo    = $("#captchaNumberTwo").val();
            var nombreapellidos     = $("#api_popup_demo.modalDemo #nombreapellidos").val();
            var city3               = $("#api_popup_demo.modalDemo #city3").val();
            var countryName3        = $("#api_popup_demo.modalDemo #countryName3").val();
            //
            company = cleanName(company);
            company = encodeURIComponent(company);

            $.ajax({
                type: "POST",
                dataType: 'json',
                url: settings.url_domain + "find-demo2",
                data: {
                    _token: _token,
                    email: email,
                    company: company,
                    gclid: gclid,
                    campaign: campaign,
                    sector: sector,
                    captcha: captcha,
                    captchaNumberOne: captchaNumberOne,
                    captchaNumberTwo: captchaNumberTwo,
                    personas: personas,
                    nombreapellidos: nombreapellidos,
                },
                beforeSend: function () {
                    // setting a timeout
                    $("#gif_loader3").fadeIn();
                    disableButtonPopup1();
                },
                success: function (msg) {
                    $("#gif_loader3").fadeOut();
                    hideErrors();
                    switch (msg.success) {
                        case 'showPopup':
                            // alert('finDemo2 showPopup');
                            // console.log('finDemo2 showPopup');
                            var result = msg.result;
                            // $(".modalPruebaGratis3").trigger('click');
                            var crm = result.url + '?email=' + result.email;
                            var recover_password = result.url + '?user_name=' + result.user_name + '&email=' + result.email + '&demo=1';
                            $("#access_crm").attr("href", crm);
                            $("#recover_password").attr("href", recover_password);
                            $("#modalPruebaGratis3 #modalcontent1").css("display", "none");
                            $("#modalPruebaGratis3 #modalemail2").css("display", "block");
                            // $("#modalemail").modal('show');
                            enableButtonPopup1();
                            break;
                        case false:
                            var data = "";
                            $.each(msg.result, function (indexInArray, valueOfElement) {
                                data += "<li>" + valueOfElement + "</li>";
                            });
                            $("#api_popup_demo.modalDemo #errorsFormDemo3 ul").html(data);
                            showErrors();
                            enableButtonPopup1();
                            break;
                        case 'robot':
                            $("#api_popup_demo.modalDemo #errorsFormDemo3").html(msg.result);
                            showErrors();
                            enableButtonPopup1();
                            break;
                        default:
                            $("#api_popup_demo.modalDemo #email").val("");
                            $("#api_popup_demo.modalDemo #company").val("");
                            $("#api_popup_demo.modalDemo #nombreapellidos").val("");
                            $("#api_popup_demo.modalDemo #sector").val("");
                            $("#api_popup_demo.modalDemo #personas").val("");
                            $("#gif_loader3").fadeIn();
                            $("#modalPruebaGratis3").css("height", "100vh");
                            $("#modalPruebaGratis3").css("background-image", "url('../front/images/bg_crm_creadonew.png");
                            $("#modalPruebaGratis3").css("background-size", "cover");
                            $("#modalPruebaGratis3 #modalemail2").css("display", "none");
                            $("#modalPruebaGratis3 #modalcontent1").css("display", "none");
                            $("#modalPruebaGratis3 #modalloading").css("display", "block");
                            redirecCreateCrm2(
                                email,
                                company,
                                gclid,
                                msg.result,
                                campaign,
                                campaignid,
                                sector,
                                mobileFlag = "",
                                personas,
                                telefono,
                                nombreapellidos,
                                city3,
                                countryName3,
                                companyName
                                );
                            break;
                    }
                },
                error: function(jqxhr, status, exception) {
                     console.log('Exception 1 :' + status + ' - ' + JSON.stringify(jqxhr), exception);
                }
            });
        }

        /**
         * Funcion para crear los demos despues de validar los campos
         */
        function redirecCreateCrm2(email, company, gclid, url, campaign, campaignid, sector, mobileFlag, personas, telefono, nombreapellidos, city, countryName, companyName){
            var gclid       = (gclid === undefined) ? '' : gclid;
            var campaign    = (campaign === undefined) ? '' : campaign;
            var campaignid  = (campaignid === undefined) ? '' : campaignid;
            company         = cleanName(company);
            company         = encodeURIComponent(company);
            $.ajax({
                type: "GET",
                url: settings.url_domain+'create-demo2',
                data: {
                    email:email,
                    company:company,
                    sector:sector,
                    nombreapellidos: nombreapellidos,
                    campaignid: campaignid,
                    personas: personas,
                    telefono: telefono,
                    city: city,
                    countryName: countryName,
                    companyName: companyName
                },
                success: function(msg) {
                    $('#companydemo_crm').val(msg.result);
                    $('#send_demo_to_rd').val(msg.result);
                    $('#btn-send-rd').click();
                    $('#flag_crm').val(msg.url);
                    // manda al demo
                    // $("#modalPruebaGratis3 #modalcontent1").css("display", "block");
                    // $("#modalPruebaGratis3 #modalemail2").css("display", "none");
                    // $("#modalPruebaGratis3 #modalloading").css("display", "none");
                    // alert('msg.url ->' + msg.url);



                    switch(detectaPlataforma()){
                        case "Android OS":
                            console.log("Android OS");
                            $("#modalPruebaGratis3 #modalemail2").css("display",  "none");
                            $("#modalPruebaGratis3 #modalcontent1").css("display", "none");
                            $("#modalPruebaGratis3 #modalloading").css("display", "none");
                            $("#modalPruebaGratis3 #modalMobile3").css("display", "block");
                             // window.location.href="https://play.google.com/store/apps/details?id=com.datacrm.application";
                            break;
                        case "iOS":
                            // console.log("iOS");
                            $("#modalPruebaGratis3 #modalemail2").css("display",  "none");
                            $("#modalPruebaGratis3 #modalcontent1").css("display", "none");
                            $("#modalPruebaGratis3 #modalloading").css("display", "none");
                            $("#modalPruebaGratis3 #modalMobile3").css("display", "block");
                             //window.location.href="https://itunes.apple.com/us/app/datacrm/id1437186766?mt=8";
                            break;
                        default:
                            // console.log("Es windows OS");
                            window.location = msg.url;
                            break;
                    }


                   // window.location = msg.url;

                },
                error: function(jqxhr, status, exception) {
                    // alert('Error create-demo.view  : url ' + url_domain+'create-demo' + " -  jqxhr " + jqxhr + " - Status : " + status + ' - Exception:', exception);
                    // console.log('Error create-demo.view  : url ' + url_domain +'create-demo' + " -  jqxhr " + jqxhr + " - Status : " + status + ' - Exception:', exception);
                }
            });
        }

        return _demosConstruct;
    }

    if (typeof (window.demos) === 'undefined') {
        window.demos = demos();
    }
})(window);

$(document).ready(function () {

    demos.init({});


    $("#modalPruebaGratis3 #btnModalClose").on("click", function  (){
        $("#api_popup_demo.modalDemo").find("button").attr("disabled", false);
        $("#modalPruebaGratis3 #modalcontent1").css("display", "block");
        $("#modalPruebaGratis3 #modalemail2").css("display", "none");
        // $("#modalPruebaGratis3").trigger("click");
    });


    $('#modalPruebaGratis3 #descarga_app').on("click", function  (){
        switch(detectaPlataforma()){
            case "Android OS":
                 $("#modalPruebaGratis3 #modalemail2").css("display",  "none");
                 $("#modalPruebaGratis3 #modalcontent1").css("display", "none");
                 $("#modalPruebaGratis3 #modalloading").css("display", "none");
                 $("#modalPruebaGratis3 #modalMobile3").css("display", "block");
                window.location.href="https://play.google.com/store/apps/details?id=com.datacrm.application";
                break;
            case "iOS":
                 $("#modalPruebaGratis3 #modalemail2").css("display",  "none");
                 $("#modalPruebaGratis3 #modalcontent1").css("display", "none");
                 $("#modalPruebaGratis3 #modalloading").css("display", "none");
                 $("#modalPruebaGratis3 #modalMobile3").css("display", "block");
                window.location.href="https://itunes.apple.com/us/app/datacrm/id1437186766?mt=8";
                break;
            default:
                window.location = msg.url;
                break;
        }
    });


    $('#modalPruebaGratis3 #noMeInteresa').on("click", function  (){
           // window.location = msg.url;

        }
    );

});

function detectaPlataforma(){
    let navegador = navigator.userAgent;
    let name = "";
    if(navigator.userAgent.indexOf('Mobile')>0){
        name ="Mobile"
        if(navigator.userAgent.indexOf('Android')>0) { name = "Android OS"} else {name = "iOS"};
    }else{
        name = "Desktop"
    }

    return name;
}
