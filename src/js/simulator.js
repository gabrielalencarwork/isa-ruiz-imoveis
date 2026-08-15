/* ==========================================
   ISA RUIZ — MORTGAGE LOAN SIMULATOR JAVASCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMortgageSimulator();
});

function initMortgageSimulator() {
  const rangeVal = document.getElementById('simValImovel');
  const rangeEntrada = document.getElementById('simEntrada');
  const rangePrazo = document.getElementById('simPrazo');
  const rangeTaxa = document.getElementById('simTaxa');

  if (!rangeVal || !rangeEntrada || !rangePrazo || !rangeTaxa) return;

  const displayVal = document.getElementById('disValImovel');
  const displayEntrada = document.getElementById('disEntrada');
  const displayPrazo = document.getElementById('disPrazo');
  const displayTaxa = document.getElementById('disTaxa');

  const resultParcela = document.getElementById('simResultParcela');
  const resultFinanciado = document.getElementById('simResultFinanciado');
  const resultEntradaPct = document.getElementById('simResultEntradaPct');
  const simWhatsAppBtn = document.getElementById('simWhatsAppBtn');

  function calculate() {
    const valImovel = parseFloat(rangeVal.value);
    let valEntrada = parseFloat(rangeEntrada.value);

    if (valEntrada >= valImovel) {
      valEntrada = valImovel * 0.8;
      rangeEntrada.value = valEntrada;
    }

    const prazoAnos = parseInt(rangePrazo.value, 10);
    const taxaAnual = parseFloat(rangeTaxa.value);

    const valFinanciado = valImovel - valEntrada;
    const entradaPct = Math.round((valEntrada / valImovel) * 100);

    const n = prazoAnos * 12;
    const i = Math.pow(1 + (taxaAnual / 100), 1 / 12) - 1;
    
    let parcela = 0;
    if (i > 0 && n > 0 && valFinanciado > 0) {
      parcela = valFinanciado * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    }

    if (displayVal) displayVal.innerText = formatBRL(valImovel);
    if (displayEntrada) displayEntrada.innerText = formatBRL(valEntrada);
    if (displayPrazo) displayPrazo.innerText = `${prazoAnos} Anos (${n}x)`;
    if (displayTaxa) displayTaxa.innerText = `${taxaAnual.toFixed(1)}% a.a.`;

    if (resultParcela) resultParcela.innerText = formatBRL(parcela);
    if (resultFinanciado) resultFinanciado.innerText = formatBRL(valFinanciado);
    if (resultEntradaPct) resultEntradaPct.innerText = `${entradaPct}% (Mínimo exigido: 20%)`;

    if (simWhatsAppBtn) {
      const msg = `Olá, Isa Ruiz! Fiz uma simulação de investimento/financiamento no site:\n` +
        `• *Valor do Imóvel:* ${formatBRL(valImovel)}\n` +
        `• *Entrada:* ${formatBRL(valEntrada)} (${entradaPct}%)\n` +
        `• *Prazo:* ${prazoAnos} anos\n` +
        `• *Parcela Estimada:* ${formatBRL(parcela)}/mês\n` +
        `Gostaria de analisar essa oportunidade com você em Araçatuba/SP.`;
      
      const encodedMsg = encodeURIComponent(msg);
      simWhatsAppBtn.href = `https://wa.me/5518991091483?text=${encodedMsg}`;
    }
  }

  function formatBRL(num) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(num);
  }

  [rangeVal, rangeEntrada, rangePrazo, rangeTaxa].forEach(input => {
    input.addEventListener('input', calculate);
  });

  calculate();
}
