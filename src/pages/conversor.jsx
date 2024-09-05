import React, { useState, useEffect } from "react";

const currencies = ["USD", "EUR", "ARS", "JPY", "GBP"];

const Conversor = () => {
  const [inputCurrency, setInputCurrency] = useState("USD");
  const [outputCurrency, setOutputCurrency] = useState("EUR");
  const [inputAmount, setInputAmount] = useState(1);
  const [outputAmount, setOutputAmount] = useState(0);
  const [isInputChanged, setIsInputChanged] = useState(true);

  const rates = {
    USD: { EUR: 0.85, ARS: 365, JPY: 110, GBP: 0.75 },
    EUR: { USD: 1.18, ARS: 429, JPY: 129, GBP: 0.88 },
    ARS: { USD: 0.0027, EUR: 0.0023, JPY: 0.30, GBP: 0.0020 },
    JPY: { USD: 0.0091, EUR: 0.0078, ARS: 3.45, GBP: 0.0068 },
    GBP: { USD: 1.33, EUR: 1.14, ARS: 510, JPY: 150 },
  };

  const convertCurrency = () => {
    try {
      const rate = rates[inputCurrency][outputCurrency];

      if (isInputChanged) {
        const result = inputAmount * rate;
        setOutputAmount(result);
      } else {
        const result = outputAmount / rate;
        setInputAmount(result);
      }
    } catch (error) {
      console.error("Error al convertir la moneda", error);
    }
  };

  useEffect(() => {
    convertCurrency();
  }, [inputCurrency, outputCurrency, inputAmount, outputAmount, isInputChanged]);

  const handleInputAmountChange = (e) => {
    setInputAmount(e.target.value);
    setIsInputChanged(true);
  };

  const handleOutputAmountChange = (e) => {
    setOutputAmount(e.target.value);
    setIsInputChanged(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Currency Converter</h2>
      <div className="flex mb-4">
        <input
          type="number"
          value={inputAmount}
          onChange={handleInputAmountChange}
          className="w-full p-2 border border-gray-300 rounded mr-2"
          placeholder="Amount"
        />
        <select
          value={inputCurrency}
          onChange={(e) => setInputCurrency(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="flex mb-4">
        <input
          type="number"
          value={outputAmount}
          onChange={handleOutputAmountChange}
          className="w-full p-2 border border-gray-300 rounded mr-2"
          placeholder="Converted Amount"
        />
        <select
          value={outputCurrency}
          onChange={(e) => setOutputCurrency(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Conversor;