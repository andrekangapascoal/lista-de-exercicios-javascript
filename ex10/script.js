function clicarNoBotao() {
  let inpuValorFabrico = document.getElementById("inputValorDeFabrico");
  let valorDeFabrica = +inpuValorFabrico.value;
  let distribuidora = (valorDeFabrica * 28) / 100;
  let imposto = (valorDeFabrica * 45) / 100;
  let custoFinal = valorDeFabrica + distribuidora + imposto;

  alert(`
        custo final: ${custoFinal}

        valor fabrica: ${valorDeFabrica}
        distribuidora: ${distribuidora}
        imposto: ${imposto}
  `);
}
