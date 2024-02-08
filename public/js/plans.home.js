!(function (n) {
    function e(a = !1) {
        (a = a || ($("#country").val() ? $("#country").val() : "co")),
            console.log(a),
            (ver_tipo_pago = "inline"),
            (tipo_pago = "Anual"),
            "pagoAnualLabel" !== ($('input[name="pago"]:checked')[0] || "").id && ((ver_tipo_pago = "none"), (tipo_pago = "Mensual")),
            [...$(".porcentaje-desc")].filter((a) => (a.style.display = ver_tipo_pago)),
            $("#country").val(a),
            $('input[name="country"]').val(a),
            $(".co").show(),
            $(".mx").hide(),
            "mx" === a && ($(".co").hide(), $(".mx").show()),
            "co" === a && ($(".mx").hide(), $(".co").show());
        var e = 0,
            o = 0,
            c = 0,
            t = 0,
            i = "pe" === a ? "" : "$";
        if ("pagoAnualLabel" == $("input[name=pago]:checked").attr("id")) {
            $("#strTypePlan").val("anual");
            var n = "",
                s = "",
                r = "",
                l = "",
                p = "",
                u = "";
            switch (a) {
                case "co":
                    (c = 4e4), (t = 64e3), (o = 3e5), (type_page = "anual"), (n = 192e4), (s = 288e4), (e = 357e3), (u = "Cédula"), (p = "(IVA incluido)"), (r = ""), (l = "COP/mes"), (implementation = "1'500K COP");
                    break;
                case "mx":
                    (c = 200), (t = 320), (type_page = "anual"), (n = 10560), (s = 16320), (e = o = 1600), (p = r = ""), (l = "MXN/mes"), (u = "CURP"), (implementation = "$ 7.000 MXN");
                    break;
                case "es":
                    (c = 12), (t = 16), (type_page = "anual"), (n = 576), (s = 816), (e = o = 100), (r = p = ""), (l = "EUR/mes"), (u = "Documento de identidad"), (implementation = "EUR €400");
                    break;
                case "ec":
                case "pa":
                case "cr":
                    (c = 12), (t = 16), (type_page = "anual"), (n = 576), (s = 816), (e = o = 100), (r = p = ""), (l = "USD/mes"), (u = "Documento de identidad"), (implementation = "USD $400");
                    break;
                case "ch":
                    (c = 10400), (t = 15200), (type_page = "anual"), (n = 576), (s = 816), (e = o = 100), (r = p = ""), (l = "CLP/mes"), (u = "Documento de identidad"), (implementation = "$400.000 CLP");
                    break;
                case "pe":
                    (c = 40), (t = 64), (type_page = "anual"), (n = 576), (s = 816), (e = o = 100), (r = p = ""), (l = " /mes"), (u = "Documento de identidad"), (implementation = "1.500 PEN");
                    break;
                default:
                    (c = 4e4), (t = 64e3), (o = 3e5), (type_page = "anual"), (n = 192e4), (s = 288e4), (e = 357e3), (u = "Cédula"), (p = "(IVA incluido)"), (r = ""), (l = "COP/mes"), (implementation = "1'500K COP");
            }
        } else
            switch (($("#strTypePlan").val("mensual"), a)) {
                case "co":
                    (c = 65e3),
                        (t = 95e3),
                        (type_page = "mensual"),
                        (n = 2e5),
                        (s = o = 3e5),
                        (p = "IVA incluido"),
                        (e = 357e3),
                        (r = ""),
                        (l = "COP/mes"),
                        (u = "Cédula"),
                        (preciodescripcion1 = "Factura anual de <s>780K</s> / 624K COP"),
                        (preciodescripcion2 = "Factura anual de <s>1.140K</s> / 912K COP"),
                        (implementation = "1'500K COP"),
                        (active = "co-active");
                    break;
                case "mx":
                    (c = 350),
                        (t = 500),
                        (type_page = "mensual"),
                        (n = 1100),
                        (s = 1700),
                        (e = o = 1600),
                        (r = p = ""),
                        (l = "MXN/mes"),
                        (u = "CURP"),
                        (pais = "México"),
                        (preciodescripcion1 = "Factura anual de <s>4.200 </s> / 3.360 MXN"),
                        (preciodescripcion2 = "Factura anual de <s>6.000 </s> / 4.800 MXN"),
                        (implementation = "$ 7.000 MXN"),
                        (active = "mxn-active");
                    break;
                case "es":
                    (c = 18),
                        (t = 25),
                        (type_page = "mensual"),
                        (n = 60),
                        (s = 85),
                        (e = o = 100),
                        (r = p = ""),
                        (l = "EUR/mes"),
                        (u = "Documento de identidad"),
                        (preciodescripcion1 = "Factura anual de <s>216</s> / 173 EUR"),
                        (preciodescripcion2 = "Factura anual de <s>300</s> / 240 EUR"),
                        (implementation = "EUR €400"),
                        (active = "eur-active");
                    break;
                case "ec":
                case "pa":
                case "cr":
                    (c = 18),
                        (t = 25),
                        (type_page = "mensual"),
                        (n = 60),
                        (s = 85),
                        (e = o = 100),
                        (r = p = ""),
                        (l = "USD/mes"),
                        (u = "Documento de identidad"),
                        (preciodescripcion1 = "Factura anual de <s>216</s> / 173 USD"),
                        (preciodescripcion2 = "Factura anual de <s>300</s> / 240 USD"),
                        (implementation = "USD $400"),
                        (active = "usd-active");
                    break;
                case "ch":
                    (c = 15e3),
                        (t = 2e4),
                        (type_page = "mensual"),
                        (n = 60),
                        (s = 85),
                        (e = o = 100),
                        (r = p = ""),
                        (l = "CLP/mes"),
                        (u = "Documento de identidad"),
                        (preciodescripcion1 = "Factura anual de <s>180K</s> / 144K CLP"),
                        (preciodescripcion2 = "Factura anual de <s>240K</s> / 192K CLP"),
                        (implementation = "$400.000 CLP"),
                        (active = "clp-active");
                    break;
                case "pe":
                    (c = 65),
                        (t = 95),
                        (type_page = "mensual"),
                        (n = 60),
                        (s = 85),
                        (e = o = 100),
                        (r = p = ""),
                        (l = " PEN/mes"),
                        (u = "Documento de identidad"),
                        (preciodescripcion1 = "Factura anual de <s>780</s> / 624 PEN"),
                        (preciodescripcion2 = "Factura anual de <s>1.140</s> / 912 PEN"),
                        (implementation = "1.500 PEN"),
                        (active = "pen-active");
                    break;
                default:
                    (c = 65e3),
                        (t = 9e4),
                        (type_page = "mensual"),
                        (n = 2e5),
                        (s = o = 3e5),
                        (p = "IVA incluido"),
                        (e = 357e3),
                        (r = ""),
                        (l = "COP/mes"),
                        (u = "Cédula"),
                        (preciodescripcion1 = "Factura anual de <s>780K</s> / 624K COP"),
                        (preciodescripcion2 = "Factura anual de <s>1.140K</s> / 912K COP"),
                        (implementation = "1'500K COP"),
                        (active = "co-active");
            }
        $(".valueAccompaniment").val(number_format(e, 0, ",", ".")).data("valor", e),
            $("#check_accompaniment").val(e),
            $(".saving_money").html(r),
            $("#check_db_capacity").val(s),
            $("#check_docs_capacity").val(n),
            $(".type_page").html(type_page),
            $(".tax_co_value").val(p),
            $(".iva").html(p),
            $("#currency").val(l),
            $("#documento_identidad").attr("placeholder", u),
            $(".accompaniment")
                .html(i + number_format(o, 0, ",", ".") + " " + l)
                .data("valor", o),
            $(".price0")
                .html(i + number_format(0, 0, ",", "."))
                .data("valor", 0),
            $(".price1")
                .html(i + number_format(c, 0, ",", ".") + "<span style='font-size: 1.3rem'>" + l + "</span>")
                .data("valor", c),
            $(".price2")
                .html(i + number_format(t, 0, ",", ".") + "<span style='font-size: 1.3rem'>" + l + "</span>")
                .data("valor", t),
            $(".clas"),
            $(".pricedes1").html(preciodescripcion1),
            $(".pricedes2").html(preciodescripcion2),
            $(".implementation").text(implementation),
            $(".moneySim").html(l);
    }
    var a, s, o;
    void 0 === n.plans &&
        (n.plans =
            ((a = {
                init: function () {
                    o();
                },
            }),
            (s = { url_domain: helperBuildURL() }),
            (o = function () {
                var a;
                $("#formPagos").on("submit", function (a) {
                    $("#errorsFormDemo").css("display", "none"), a.preventDefault();
                    a = $(this).serialize();
                    console.log(s.url_domain),
                        $.ajax({
                            type: "POST",
                            url: s.url_domain + "send-payu",
                            data: a,
                            beforeSend: function () {
                                $("#formPagos").find("button").attr("disabled", !0);
                            },
                            success: function (a) {
                                var o;
                                console.log("aqui"),
                                    $(".loader_contact").fadeOut(),
                                    $("#formPagos").find("button").attr("disabled", !1),
                                    a.success
                                        ? $("#modalReadyPaymentCompleted")
                                              .modal({ backdrop: "static", keyboard: !1, show: !0 })
                                              .on("hidden.bs.modal", function (a) {
                                                  n.location = s.url_domain + "response-payu";
                                              })
                                              .on("shown.bs.modal", function (a) {})
                                              .modal("show")
                                        : ((o = ""),
                                          $.each(a.result, function (a, e) {
                                              o += "<li>" + e + "</li>";
                                          }),
                                          $("#formPagos ul").html(o),
                                          $("#errorsformPagos").css("display", "block"),
                                          setTimeout(function () {
                                              $("#errorsformPagos").fadeOut(1500);
                                          }, 1800));
                            },
                            error: function (a, e, o) {
                                console.log("mytextStatus : ".mytextStatus);
                            },
                        });
                }),
                    $(".modalPagosView").on("click", function () {
                        $(".payment_identifier").attr("href", s.url_domain + "iniciar-sesion/?pay=true"), $("#usuariosPayu").prop("required", !0), $("#typeForm").val(""), $("#isAcompa").val("");
                        n.scrollY;
                        var a = $("#country").val(),
                            e = $(this).prev("p").find(".price_").text();
                        $("#check_accompaniment").is(":checked") && $("#check_accompaniment").trigger("click"),
                            $("#check_accompaniment").prop("checked", !1),
                            $("#check_db_capacity").prop("checked", !1),
                            $("#check_docs_capacity").prop("checked", !1),
                            $(".tax_co").hide(),
                            $("#usuariosPayu").empty(),
                            $(".usuariosPago").css("display", "none"),
                            $(".divModalPayu").css("display", "block"),
                            (excepciones = ["pe", "pa"]),
                            (users_c = "#usuariosPayu"),
                            (modal = "#modalPagos"),
                            $("#users").show(),
                            $("#pay").removeClass("mt-4"),
                            $("#pay").removeClass("col-12"),
                            $("#pay").addClass("col-6"),
                            -1 != jQuery.inArray($("#country").val(), excepciones) && ((users_c = "#usuariosPayuEx"), (modal = "#modalPagosEx")),
                            $(modal)
                                .on("shown.bs.modal", function () {
                                    $("#usuariosPayu").trigger("change"), $("#resumen").hide();
                                })
                                .modal("show"),
                            "pa" == a && ((e = (e = e.replace(/[^\d,]/g, "")).replace(",", ".")), (e = (7 * parseFloat(e)) / 100 + parseFloat(e)), (e = "$" + (e = (e = String(e.toFixed(2))).replace(".", ",")) + " USD")),
                            $(".pagotitle").html("Mensualidad " + e + " por usuario"),
                            $(".pagoTitlePc").html("Mensualidad " + e + " por usuario");
                        var o = $(this).data("users"),
                            c = $(".pagoTitlePc").text();
                        $(users_c).html("");
                        var t = '<option value="" >Usuarios</option>';
                        t += '<option value="3" >De 1 a 3</option>';
                        for (let a = 4; a < 51; a++) t += '<option value="' + a + '" >' + a + "</option>";
                        $(users_c).append(t);
                        var i = $(this).prev("p").find(".price_").data("valor");
                        "anual" == $("#strTypePlan").val() && ((i *= 12), (val = isFloat(i)), 0 == val || ((res = String(i.toFixed(1))), (i = res.replace(".", ","))));
                        e = i.toString().replace(/(\d)((?=(\d{3})+(?!\d)))/g, "$1.");
                        $(".totalPago").html(0), $(".country").val(a), $(".userPlan").val(o), $(".typePlan").val(c), $(".totalPagoBase").html(e), $(".totalPagoBase").val(i);
                    }),
                    $("#usuariosPayu, #usuariosPayuEx").on("change", function () {
                        var a = "",
                            e = $(".totalPagoBase").val(),
                            o = ($("#check_db_capacity").is(":checked") && $("#check_db_capacity").val()) || 0,
                            c = ($("#check_docs_capacity").is(":checked") && $("#check_docs_capacity").val()) || 0,
                            t = ($("#check_accompaniment").is(":checked") && $(".valueAccompaniment").data("valor")) || 0;
                        o || c || t ? $("#resumen").show() : $("#resumen").hide();
                        var i = $(this).val();
                        val = isFloat(e);
                        (e *= i), (i = e + parseFloat(o) + parseFloat(c));
                        $("#resume_monthly")
                            .html("$" + number_format(i, 0, ",", ".") + " " + $("#currency").val())
                            .data("valor", i),
                            (e += parseFloat(o)),
                            (e += parseFloat(c)),
                            (e += parseFloat(t)),
                            "pa" == $("#country").val() && (e += (7 * e) / 100);
                        for (var n = e.toFixed(2), s = n.length - 1, r = 0; 0 <= s; s--, r++) a = n.charAt(s) + (0 < r && r % 3 == 0 ? "." : "") + a;
                        (e = a.replace("..", ",")), (e = String(e.replace(/\,00$/, "")));
                        $(".totalPago").text(e),
                            $("#resume_unit_pay")
                                .html("$" + number_format(t, 0, ",", ".") + " " + $("#currency").val())
                                .data("valor", t),
                            $(".totalPagofinal").val(e);
                    }),
                    (a = (a = $("#countryCode").val()) || "co"),
                    $("#countryCode").val(a),
                    e(),
                    $(".changePlan").on("click", function () {
                        (c = $(this).data("flag")), e(c);
                    });
            }),
            a));
})(window),
    $(document).ready(function () {
        plans.init({});
    });
z;
