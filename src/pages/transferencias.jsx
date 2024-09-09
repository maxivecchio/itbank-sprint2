import React from 'react'
import axios from 'axios'

const Transferencias = () => {
  return (
    <div className="dashboard max-w-[900px] mx-auto ml-0 text-left">
      <h1 className="text-3xl font-bold mb-6">Historial de transferencias</h1>
      <table className="w-full border-collapse mt-5">
        <thead className="bg-primary text-white">
          <tr>
            <th className="px-4 py-3 text-left">Fecha</th>
            <th className="px-4 py-3 text-left">Descripción</th>
            <th className="px-4 py-3 text-left">Monto</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-16</td>
            <td className="px-4 py-3 text-left text-gray-700" data-label="Descripción">Pago de tarjeta de crédito</td>
            <td className="px-4 py-3 font-bold text-red-700" data-label="Monto">- $3,200.00</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-15</td>
            <td className="px-4 py-3 text-left text-gray-700" data-label="Descripción">Depósito en cuenta</td>
            <td className="px-4 py-3 font-bold text-green-600" data-label="Monto">+ $5,000.00</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-14</td>
            <td className="px-4 py-3 text-left text-gray-700" data-label="Descripción">Compra en tienda online</td>
            <td className="px-4 py-3 font-bold text-red-700" data-label="Monto">- $1,200.00</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-13</td>
            <td className="px-4 py-3 text-left text-gray-700" data-label="Descripción">Transferencia enviada</td>
            <td className="px-4 py-3 font-bold text-red-700" data-label="Monto">- $2,000.00</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-12</td>
            <td className="px-4 py-3 text-left text-gray-700" data-label="Descripción">Transferencia recibida</td>
            <td className="px-4 py-3 font-bold text-green-600" data-label="Monto">+ $1,500.00</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-11</td>
            <td className="px-4 py-3 text-left text-gray-700" data-label="Descripción">Pago de servicios públicos</td>
            <td className="px-4 py-3 font-bold text-red-700" data-label="Monto">- $900.00</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-10</td>
            <td className="px-4 py-3 text-left text-gray-700" data-label="Descripción">Transferencia recibida</td>
            <td className="px-4 py-3 font-bold text-green-600" data-label="Monto">+ $8,000.00</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-09</td>
            <td className="px-4 py-3 text-left text-gray-700" data-label="Descripción">Retiro en cajero automático</td>
            <td className="px-4 py-3 font-bold text-red-700" data-label="Monto">- $500.00</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-08</td>
            <td className="px-4 py-3 text-left text-gray-700" data-label="Descripción">Transferencia enviada</td>
            <td className="px-4 py-3 font-bold text-red-700" data-label="Monto">- $1,000.00</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-07</td>
            <td className="px-4 py-3 text-left text-gray-700" data-label="Descripción">Transferencia recibida</td>
            <td className="px-4 py-3 font-bold text-green-600" data-label="Monto">+ $3,000.00</td>
          </tr>
        </tbody>
      </table>
  </div>
  )
}

export default Transferencias