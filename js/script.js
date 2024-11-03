function calculate() {
  const transactionType = document.getElementById('transaction-type').value;
  const yourRate = parseFloat(document.getElementById('your-rate').value);
  const currentRate = parseFloat(document.getElementById('current-rate').value);
  const usdtAmount = parseFloat(document.getElementById('usdt-amount').value);
  const currencySymbol = document.getElementById('currency-symbol').value;
  const resultDiv = document.getElementById('result');

  let message;
  let resultClass;

  if (transactionType === 'buy') {
    const loss = (yourRate - currentRate) * usdtAmount;
    if (loss > 0) {
      message = `You lost ${currencySymbol} ${loss.toFixed(2)} by buying at a higher rate.`;
      resultClass = 'loss';
    } else if (loss < 0) {
      message = `You saved ${currencySymbol} ${(-loss).toFixed(2)} by buying at a lower rate.`;
      resultClass = 'gain';
    } else {
      message = `No change in your buying transaction.`;
      resultClass = 'no-change';
    }
  } else {
    const gain = (yourRate - currentRate) * usdtAmount;
    if (gain > 0) {
      message = `You gained ${currencySymbol} ${gain.toFixed(2)} by selling at a higher rate.`;
      resultClass = 'gain';
    } else if (gain < 0) {
      message = `You lost ${currencySymbol} ${(-gain).toFixed(2)} by selling at a lower rate.`;
      resultClass = 'loss';
    } else {
      message = `No change in your selling transaction.`;
      resultClass = 'no-change';
    }
  }

  resultDiv.textContent = message;
  resultDiv.className = resultClass;
}