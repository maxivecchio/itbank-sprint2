import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CurrencyConverter = () => {
  const [amountARS, setAmountARS] = useState(0);
  const [amountUSD, setAmountUSD] = useState(0);
  const [dolarType, setDolarType] = useState("");
  const [error, setError] = useState("");
  const [dolarOptions, setDolarOptions] = useState([]);
  const [userHasInput, setUserHasInput] = useState(false);

  useEffect(() => {
    axios
      .get("https://dolarapi.com/v1/dolares")
      .then((response) => {
        const data = response.data;
        setDolarOptions(data);
        setDolarType(data[0]?.casa || "");
      })
      .catch((err) => {
        setError("Error al obtener las tasas de dólar");
        console.error(err);
      });
  }, []);

  const handleConversion = (
    value,
    fromCurrency,
    toCurrency,
    setFromCurrency,
    setToCurrency,
    rate
  ) => {
    setFromCurrency(value);
    setUserHasInput(true);

    if (value === "" || isNaN(value) || value <= 0) {
      setError("Por favor, ingrese un número válido");
      setToCurrency(0);
      return;
    }

    setError("");

    if (rate) {
      const result = fromCurrency === "ARS" ? value / rate : value * rate;
      setToCurrency(result.toFixed(3));
    } else {
      setError("Tipo de dólar no disponible");
    }
  };

  const handleARSChange = (e) => {
    const value = e.target.value;
    const selectedRate = dolarOptions.find(
      (option) => option.casa === dolarType
    )?.venta;

    handleConversion(
      value,
      "ARS",
      "USD",
      setAmountARS,
      setAmountUSD,
      selectedRate
    );
  };

  const handleUSDChange = (e) => {
    const value = e.target.value;
    const selectedRate = dolarOptions.find(
      (option) => option.casa === dolarType
    )?.venta;

    handleConversion(
      value,
      "USD",
      "ARS",
      setAmountUSD,
      setAmountARS,
      selectedRate
    );
  };

  useEffect(() => {
    if (dolarType && userHasInput) {
      const selectedRate = dolarOptions.find(
        (option) => option.casa === dolarType
      )?.venta;
      handleConversion(
        amountARS,
        "ARS",
        "USD",
        setAmountARS,
        setAmountUSD,
        selectedRate
      );
    }
  }, [dolarType]);

  return (
    <div className="max-w-md mt-10 p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Conversor de monedas
      </h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="flex mb-4">
        <div className="border-2 flex w-full">
          <input
            type="number"
            value={amountARS}
            onChange={handleARSChange}
            className="w-full p-2 border-gray-300 rounded mr-2"
            placeholder="Cantidad en ARS"
          />
          <div className="flex items-center justify-center w-64 px-3 bg-gray-100 rounded-tl rounded-bl">
            ARS
          </div>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="border-2 flex w-full">
          <input
            type="number"
            value={amountUSD}
            onChange={handleUSDChange}
            className="w-full p-2"
            placeholder="Cantidad en USD"
          />
          {dolarType && (
            <Select
              onValueChange={(value) => setDolarType(value)}
              defaultValue={dolarType}
            >
              <SelectTrigger className="border-none w-64 px-3 bg-gray-100">
                <SelectValue placeholder="Selecciona el tipo de dólar" />
              </SelectTrigger>
              <SelectContent>
                {dolarOptions.map((option) => (
                  <SelectItem
                    className=""
                    key={option.casa}
                    value={option.casa}
                  >
                    {option.nombre === "Contado con liquidación"
                      ? "Dólar Contado con liqui."
                      : "Dólar " + option.nombre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
