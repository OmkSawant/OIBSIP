function convertTemperature() {
    const tempInput = document.getElementById('temperature').value.trim();
    const unit = document.getElementById('unit').value;
    const resultElement = document.getElementById('result');
  
    // Validate input
    if (isNaN(tempInput) || tempInput === '') {
      resultElement.innerHTML = '<span style="color: red;">Please enter a valid number.</span>';
      return;
    }
  
    const temp = parseFloat(tempInput);
    let convertedTemp = '';
  
    switch (unit) {
      case 'celsius':
        convertedTemp = `<p>${(temp * 9/5 + 32).toFixed(2)} °F</p><p>${(temp + 273.15).toFixed(2)} K</p>`;
        break;
      case 'fahrenheit':
        convertedTemp = `<p>${((temp - 32) * 5/9).toFixed(2)} °C</p><p>${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K</p>`;
        break;
      case 'kelvin':
        if (temp < 0) {
          resultElement.innerHTML = '<span style="color: red;">Kelvin cannot be negative.</span>';
          return;
        }
        convertedTemp = `<p>${(temp - 273.15).toFixed(2)} °C</p><p>${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F</p>`;
        break;
    }
  
    resultElement.innerHTML = `<strong>Converted Temperature:</strong>${convertedTemp}`;
  }
  