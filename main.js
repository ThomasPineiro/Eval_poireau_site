$("#nouvelle_vente").on("show.bs.modal", function (event) {
    $("#lien_vente").attr("src","images/shopping-cart_o.png");
});
$("#nouvelle_vente").on("hide.bs.modal", function (event) {
    $("#lien_vente").attr("src","images/shopping-cart_v.png");
});


$("#nouvelle_entree").on("show.bs.modal", function (event) {
    $("#lien_entree").attr("src","images/plus-circle_o.png");
});
$("#nouvelle_entree").on("hide.bs.modal", function (event) {
    $("#lien_entree").attr("src","images/plus-circle_v.png");
});


$("#quant_perdue").on("show.bs.modal", function (event) {
    $("#lien_quant").attr("src","images/minus-circle_o.png");
});
$("#quant_perdue").on("hide.bs.modal", function (event) {
    $("#lien_quant").attr("src","images/minus-circle_v.png");
});