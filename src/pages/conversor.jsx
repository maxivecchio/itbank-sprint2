import React, { useState, useEffect } from "react";
import axios from "axios";

const currencies = ["USD", "EUR", "ARS", "JPY", "GBP"];

const CurrencyConverter = () => {
  const [inputCurrency, setInputCurrency] = useState("ARS");
  const [outputCurrency, setOutputCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [dolarType, setDolarType] = useState("");
  const [error, setError] = useState("");
  const [dolarOptions, setDolarOptions] = useState([]);

  useEffect(() => {
    // Obtener las tasas de dólar al cargar el componente
    axios
      .get("https://dolarapi.com/v1/dolares")
      .then((response) => {
        const data = response.data;
        setDolarOptions(data);
        setDolarType(data[0]?.casa || ""); // Selecciona el primer tipo de dólar por defecto
      })
      .catch((err) => {
        setError("Error al obtener las tasas de dólar");
        console.error(err);
      });
  }, []);

  const convertCurrency = () => {
    if (amount === "" || isNaN(amount) || amount <= 0) {
      setError("Por favor, ingrese un número válido");
      setConvertedAmount(0);
      return;
    }

    setError("");

    const selectedRate = dolarOptions.find((option) => option.casa === dolarType);
    if (selectedRate) {
      const rate = selectedRate.venta;
      const result = amount / rate;
      setConvertedAmount(result.toFixed(3));
    } else {
      setError("Tipo de dólar no disponible");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Currency Converter</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="flex mb-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
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
        <select
          value={dolarType}
          onChange={(e) => setDolarType(e.target.value)}
          className="p-2 border border-gray-300 rounded mr-2"
        >
          {dolarOptions.map((option) => (
            <option key={option.casa} value={option.casa}>
              {option.nombre}
            </option>
          ))}
        </select>
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
      <div className="text-center">
        <p className="text-lg font-semibold">
          Converted Amount: {convertedAmount} {outputCurrency}
        </p>
        <button
          onClick={convertCurrency}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Convertir
        </button>
      </div>
    </div>
  );
};

export default CurrencyConverter;
