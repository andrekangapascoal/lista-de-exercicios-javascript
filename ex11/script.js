function clickNoBotao() {
  let inputCarrosVendidos = document.getElementById(
    "inputNumeroDeCarrosVendidos"
  );
  let carrosVendidos = inputCarrosVendidos.value;

  let inputValorTotalDeVendas = document.getElementById("valorTotalDeVendas");
  let valorTotalDeVendas = +inputValorTotalDeVendas.value;

  let inputSalarioFixo = document.getElementById("salarioFixo");
  let salarioFixo = +inputSalarioFixo.value;

  let inputValorPorCarroVendido = document.getElementById(
    "valorPorCarroVendido"
  );
  let valorPorCarroVendido = +inputCarrosVendidos.value;

  let comissao = carrosVendidos * valorPorCarroVendido;
  let percentagemVendas = (5 * valorTotalDeVendas) / 100;
  alert(`
  O Salário fixo final ${salarioFixo + comissao + percentagemVendas}
  
  
  `);
}
