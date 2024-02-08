
var urlParams = new URLSearchParams(window.location.search);
var mobile = urlParams.get('mobile');
var potentialname = (urlParams.get('potentialname')) ? urlParams.get('potentialname') : 'Whatsapp';
var assigned_user_id = urlParams.get('assigned_user_id');
var redirect_chat_whatsapp = urlParams.get('redirect_chat_whatsapp');
var origin_campaign = urlParams.get('origin_campaign');
var code_conversion_adwords = urlParams.get('code_conversion_adwords');
var empresa = urlParams.get('empresa');
var campaign_gclid = urlParams.get('campaign_gclid');
var datacrm_whatsapp_config = {
    potentialname,
    mobile,
    assigned_user_id,
    redirect_chat_whatsapp,
    origin_campaign,
    code_conversion_adwords,
    empresa,
    campaign_gclid
};


function addGoogleAdsConversionCode() {
    if(datacrm_whatsapp_config.code_conversion_adwords){
        let conversionCodeArr = datacrm_whatsapp_config.code_conversion_adwords.split('/');
        getScript("https://www.googletagmanager.com/gtag/js?id="+conversionCodeArr[0], function(){
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', conversionCodeArr[0]);
            if(typeof(datacrmConversion) == 'undefined'){
                let _url_ = datacrm_whatsapp_config.empresa.split('/');
                let scriptConversion = _url_[0] + '//' + _url_[2] + '/' + _url_[3] + '/' + _url_[4] + '/resources/conversiongoogleads.js';
                getScript(scriptConversion, function(){
                    main(datacrm_whatsapp_config.code_conversion_adwords);
                });
            }else{
                main(datacrm_whatsapp_config.code_conversion_adwords);
            }
        });                            
    }else{
        main();
    }
}

function main(data = false) {
    var _template_ =
    '<form> <div class="container-wpp"><div style="margin: 0px 30px 30px 0px !important;" class="modal-content_wpp modal-dialog_window datacrm_wpp_float_modal"><div id="bricks-component-KaqkzngOV_DrbqtGx3JX_A" class="bricks--component bricks--component-popup"><section id="datacrm-wpp-section-k8hluh9z" class="bricks--section datacrm-wpp-section"><div id="datacrm-wpp-row-k8hluoen" class="bricks--row datacrm-wpp-row"><div id="datacrm-wpp-column-k8hluoeo" class="bricks--column datacrm-wpp-column"><div><div id="datacrm-wpp-r08RiB7rIVj4G7nl9DICbw" class="bricks--component bricks--component-text "><p><span style="color: rgb(229, 229, 229); font-family: &quot;Open Sans&quot;, sans-serif;">¡Hola! Completa los siguientes campos para iniciar la conversación en WhatsApp</span></p></div></div></div></div><div id="datacrm-wpp-row-k8hluha0" class="bricks--row datacrm-wpp-row"><div id="datacrm-wpp-column-k8hluha1" class="bricks--column datacrm-wpp-column"><div><div id="datacrm-wpp-SnaSrqZg_8lKiue9Pk05fA" class="bricks--component bricks-form "><input type="hidden" name="empresa_datacrm_qAWSDeRFGThUHJN"><input type="hidden" name="potentialname_qAWSDeRFGThUHJN"><input type="hidden" name="asigned_user_name_datacrm_qAWSDeRFGThUHJN"><input type="hidden" name="actors_create_datacrm_qAWSDeRFGThUHJN" value="Accounts,Contacts,Potentials,Campaigns"><input type="hidden" name="mobile_conversation_datacrm_qAWSDeRFGThUHJN"><input type="hidden" name="origin_campaign_qAWSDeRFGThUHJN"><input type="hidden" name="campaign_gclid_qAWSDeRFGThUHJN"><div class="bricks-form__fieldset" data-progressive-profiling=""><div class="bricks-form__field has-danger"><input id="wpp-text_field" class="bricks-form__input required js-text js-field-name" name="name_datacrm_qAWSDeRFGThUHJN" type="text" data-use-type="STRING" placeholder="Nombre *" required="required" data-pristine-required-message="Campo es obligatorio."></div><div class="bricks-form__field has-danger"><input id="wpp-email_field" class="bricks-form__input required js-email js-field-email" name="email_datacrm_qAWSDeRFGThUHJN" type="email" data-use-type="STRING" placeholder="Email *" required="required" data-pristine-required-message="Campo es obligatorio." data-pristine-email-message="Email inválido."></div><div class="bricks-form__field has-danger"><input id="wpp-mobile_field" class="bricks-form__input required js-mobile js-field-mobile" name="mobile_datacrm_qAWSDeRFGThUHJN" type="text" data-use-type="STRING" placeholder="Telefono *" required="required" data-pristine-required-message="Campo es obligatorio."><label for="wpp-mobile_field" class="bricks-form__label"> &#9888; Formato de número de teléfono inválido, debe contener solo números.</label></div></div><div class="bricks-form__submit"><button class="bricks--component bricks--component-button" id="datacrm-wpp-ywPKKpSiYnliCXSSa9W6Ww">iniciar conversación</button></div></div></div></div></div></section></div></div><button  type="button" id="datacrm-wpp-XBNbSYA4GHT4f15Q3vgw5w" aria-label="Abrir WhatsApp" class="datacrm_wpp_float"></button></div>';
    setTimeout(function () {
        jQuery("body").append(_template_),
            datacrm_whatsapp_config &&
            (jQuery("input[name=origin_campaign_qAWSDeRFGThUHJN]").val(datacrm_whatsapp_config.origin_campaign),
            jQuery("input[name=potentialname_qAWSDeRFGThUHJN]").val(datacrm_whatsapp_config.potentialname),
            jQuery("input[name=mobile_conversation_datacrm_qAWSDeRFGThUHJN]").val(datacrm_whatsapp_config.mobile),
            jQuery("input[name=empresa_datacrm_qAWSDeRFGThUHJN]").val(datacrm_whatsapp_config.empresa),
            jQuery("input[name=asigned_user_name_datacrm_qAWSDeRFGThUHJN]").val(datacrm_whatsapp_config.asigned_user_name),
            jQuery("input[name=campaign_gclid_qAWSDeRFGThUHJN]").val(datacrm_whatsapp_config.campaign_gclid)),
            jQuery("#datacrm-wpp-XBNbSYA4GHT4f15Q3vgw5w").click(function () {
                var displayForm = false;
                if (void 0 === datacrm_whatsapp_config.redirect_chat_whatsapp || "false" == datacrm_whatsapp_config.redirect_chat_whatsapp) {
                    let a = jQuery(".modal-content_wpp");
                    jQuery(a).toggle();
                    if (a.is(':visible')) displayForm = true;
                } else {
                    var a = "https://api.whatsapp.com/send?phone=" + jQuery("input[name=mobile_conversation_datacrm_qAWSDeRFGThUHJN]").val();
                    window.parent.postMessage({redirectUrl : a}, '*');
                }
                window.parent.postMessage({displayForm : displayForm }, '*');
            }),
            jQuery("#datacrm-wpp-ywPKKpSiYnliCXSSa9W6Ww").click(function () {
                if ((jQuery(".bricks-form__label").css("display", "none"), jQuery("#wpp-text_field").val().length > 0 && jQuery("#wpp-email_field").val().length > 0 && jQuery("#wpp-mobile_field").val().length > 0)) {
                    var a = jQuery("#wpp-mobile_field").val();
                    try {
                        var e = new RegExp(/^\d*\.?\d*$/);
                    } catch (a) {
                        return alert("No se ha podido hacer la validación del número de teléfono"), !1;
                    }
                    if (!e.test(a)) return jQuery(".bricks-form__label").css("display", "block"), !1;
                    var t = jQuery("input[name=email_datacrm_qAWSDeRFGThUHJN]").val().split("@")[1].split(".")[0];
                    if (["hotmail", "gmail", "outlook", "yahoo"].indexOf(t) > -1) {
                        var i = "";
                        jQuery("input[name=actors_create_datacrm_qAWSDeRFGThUHJN]").val("Contacts,Potentials,Campaigns");
                    } else (i = t), jQuery("input[name=actors_create_datacrm_qAWSDeRFGThUHJN]").val("Contacts,Potentials,Accounts,Campaigns");
                    var prefix = jQuery('.iti__selected-flag').attr('title').split('+')[1];
                    prefix = (prefix == 52) ? prefix + 1 : prefix;
                    var n = {
                        origin_campaign: jQuery("input[name=origin_campaign_qAWSDeRFGThUHJN]").val(),
                        mobile: prefix + jQuery("input[name=mobile_datacrm_qAWSDeRFGThUHJN]").val(),
                        accountname: i,
                        potentialname: jQuery("input[name=potentialname_qAWSDeRFGThUHJN]").val(),
                        lastname: jQuery("input[name=name_datacrm_qAWSDeRFGThUHJN]").val(),
                        email: jQuery("input[name=email_datacrm_qAWSDeRFGThUHJN]").val(),
                        actors_create: jQuery("input[name=actors_create_datacrm_qAWSDeRFGThUHJN]").val(),
                        assigned_user_name: jQuery("input[name=asigned_user_name_datacrm_qAWSDeRFGThUHJN]").val(),
                        campaign_gclid : jQuery("input[name=campaign_gclid_qAWSDeRFGThUHJN]").val(),
                        from: "Whatsapp Button",
                        amount: 0
                    },
                    r = { operation: "createAll_wpp", element: JSON.stringify(n) };
                    jQuery.post(jQuery("input[name=empresa_datacrm_qAWSDeRFGThUHJN]").val(), r, function (a) {
                        if(typeof(datacrmConversion) !== 'undefined'){
                            if(data){
                                datacrmConversion.init(a, data);
                            }else{
                                datacrmConversion.init(a);
                            }
                            
                        }else{
                            console.log(">>>> data", a);
                        }
                    }),
                    jQuery("input[name=name_datacrm_qAWSDeRFGThUHJN]").val(""),
                    //jQuery("input[name=potentialname_qAWSDeRFGThUHJN]").val(""),
                    jQuery("input[name=email_datacrm_qAWSDeRFGThUHJN]").val(""),
                    jQuery("input[name=mobile_datacrm_qAWSDeRFGThUHJN]").val("");
                    var o = "https://api.whatsapp.com/send?phone=" + jQuery("input[name=mobile_conversation_datacrm_qAWSDeRFGThUHJN]").val();
                    window.parent.postMessage({redirectUrl : o}, '*');
                }
            });
            var input = document.querySelector("#wpp-mobile_field");
            window.intlTelInput(input, {
                preferredCountries: ['co'],
                initialCountry: "auto",
                geoIpLookup: function(success, failure) {
                    jQuery.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                      var countryCode = (resp && resp.country) ? resp.country : "co";
                      success(countryCode);
                    });
                },
                utilsScript: "https://integraciones.datacrm.la/datacrm/whatsapp_button/node_modules/intl-tel-input/build/js/utils.js",
            });
            jQuery(".iti__country-list").css('width', '410px');
            jQuery(".modal-content_wpp").addClass('width-78');
            registerEvents();
    }, 1000);
}

function registerEvents() {
    jQuery(window).on('resize', function(){
        var win = jQuery(this);
        //validar si la pantalla es pequeña y el iframe tiene el formulario
        //500 -> tamaño del iframe cuando se muestra el formulario
        //80 -> tamaño del iframe cuando se muestra solo el boton
        if (win.width() < 500 && win.width() > 80) { 
            jQuery(".iti__country-list").css('width', '178px');
            jQuery(".modal-content_wpp").addClass('width-70');
            jQuery(".modal-content_wpp").removeClass('width-78');
        }else{
            jQuery(".iti__country-list").css('width', '410px');
            jQuery(".modal-content_wpp").removeClass('width-70');
            jQuery(".modal-content_wpp").addClass('width-78');
        }
    });
}

function getScript(a, e) {
    var t = document.createElement("script");
    t.src = a;
    var i = document.getElementsByTagName("head")[0],
        n = !1;
    (t.onload = t.onreadystatechange = function () {
        n || (this.readyState && "loaded" != this.readyState && "complete" != this.readyState) || ((n = !0), e(), (t.onload = t.onreadystatechange = null), i.removeChild(t));
    }),
    i.appendChild(t);
}

addGoogleAdsConversionCode();
