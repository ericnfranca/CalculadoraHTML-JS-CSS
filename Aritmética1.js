$(document).ready(function(){

  $("#somar").click(function(){
    var valor1 = parseFloat($("#valor1").val());
    var valor2 = parseFloat($("#valor2").val());

    var soma = valor1 + valor2

    $("#somatorio").val(soma);
  });

  $("#subtrair").click(function(){
    var valor3 = parseFloat($("#valor3").val());
    var valor4 = parseFloat($("#valor4").val());

    var subtracao = valor3 - valor4

    $("#subtracionado").val(subtracao);
  });

  $("#multiplicar").click(function(){
    var valor5 = parseFloat($("#valor5").val());
    var valor6 = parseFloat($("#valor6").val());

    var multiplicacao = valor5 * valor6

    $("#multiplicado").val(multiplicacao);
  });

   $("#dividir").click(function(){
    var valor7 = parseFloat($("#valor7").val());
    var valor8 = parseFloat($("#valor8").val());

    var divisao = valor7 / valor8

    $("#dividido").val(divisao);
  });

  $("#LimparSoma").click(function() {
    $("#valor1").val("");
    $("#valor2").val("");
    $("#somatorio").val("");
  });

  $("#LimparSubtracao").click(function() {
    $("#valor3").val("");
    $("#valor4").val("");
    $("#subtracionado").val("");
  });

  $("#LimparMultiplicacao").click(function() {
    $("#valor5").val("");
    $("#valor6").val("");
    $("#multiplicado").val("");
  });

  $("#LimparDivisao").click(function() {
    $("#valor7").val("");
    $("#valor8").val("");
    $("#dividido").val("");
  });
});
