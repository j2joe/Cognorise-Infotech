// script.js
function convertCurrency() {
    const conversionRate = 0.85; // Example rate: 1 USD = 0.85 EUR
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (isNaN(amount)) {
        document.getElementById('result').innerText = 'Please enter a valid number';
        return;
    }

    const result = amount * conversionRate;
    document.getElementById('result').innerText = `Amount in EUR: €${result.toFixed(2)}`;
}
