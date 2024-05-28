function calcularFolhaPagamento() {
    const valorHora = parseFloat(document.getElementById('valorHora').value);
    const horasTrabalhadas = parseFloat(document.getElementById('horasTrabalhadas').value);

    if (isNaN(valorHora) || isNaN(horasTrabalhadas)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const salarioBruto = valorHora * horasTrabalhadas;
    let ir = 0;

    if (salarioBruto > 2500) {
        ir = 0.20 * salarioBruto;
    } else if (salarioBruto > 1500) {
        ir = 0.10 * salarioBruto;
    } else if (salarioBruto > 900) {
        ir = 0.05 * salarioBruto;
    }

    const sindicato = 0.03 * salarioBruto;
    const fgts = 0.11 * salarioBruto;
    const totalDescontos = ir + sindicato;
    const salarioLiquido = salarioBruto - totalDescontos;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Salário Bruto: (${valorHora.toFixed(2)} * ${horasTrabalhadas}) : R$ ${salarioBruto.toFixed(2)}</p>
        <p>(-) IR (Imposto de Renda) : R$ ${ir.toFixed(2)}</p>
        <p>(-) Sindicato (3%) : R$ ${sindicato.toFixed(2)}</p>
        <p>FGTS (11%) : R$ ${fgts.toFixed(2)}</p>
        <p>Total de descontos : R$ ${totalDescontos.toFixed(2)}</p>
        <p>Salário Líquido : R$ ${salarioLiquido.toFixed(2)}</p>
    `;
}
