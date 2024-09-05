import React from 'react'

const Transferencias = () => {
  return (
    <div class="dashboard max-w-[900px] mx-auto ml-0 text-left">
      <h1 class="text-3xl font-bold mb-6">Historial de transferencias</h1>
      <table class="w-full border-collapse mt-5">
        <thead class="bg-primary text-white">
          <tr>
            <th class="px-4 py-3 text-left">Fecha</th>
            <th class="px-4 py-3 text-left">Descripción</th>
            <th class="px-4 py-3 text-left">Monto</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b">
            <td class="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-16</td>
            <td class="px-4 py-3 text-left text-gray-700" data-label="Descripción">Pago de tarjeta de crédito</td>
            <td class="px-4 py-3 font-bold text-red-700" data-label="Monto">- $3,200.00</td>
          </tr>
          <tr class="border-b">
            <td class="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-15</td>
            <td class="px-4 py-3 text-left text-gray-700" data-label="Descripción">Depósito en cuenta</td>
            <td class="px-4 py-3 font-bold text-green-600" data-label="Monto">+ $5,000.00</td>
          </tr>
          <tr class="border-b">
            <td class="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-14</td>
            <td class="px-4 py-3 text-left text-gray-700" data-label="Descripción">Compra en tienda online</td>
            <td class="px-4 py-3 font-bold text-red-700" data-label="Monto">- $1,200.00</td>
          </tr>
          <tr class="border-b">
            <td class="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-13</td>
            <td class="px-4 py-3 text-left text-gray-700" data-label="Descripción">Transferencia enviada</td>
            <td class="px-4 py-3 font-bold text-red-700" data-label="Monto">- $2,000.00</td>
          </tr>
          <tr class="border-b">
            <td class="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-12</td>
            <td class="px-4 py-3 text-left text-gray-700" data-label="Descripción">Transferencia recibida</td>
            <td class="px-4 py-3 font-bold text-green-600" data-label="Monto">+ $1,500.00</td>
          </tr>
          <tr class="border-b">
            <td class="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-11</td>
            <td class="px-4 py-3 text-left text-gray-700" data-label="Descripción">Pago de servicios públicos</td>
            <td class="px-4 py-3 font-bold text-red-700" data-label="Monto">- $900.00</td>
          </tr>
          <tr class="border-b">
            <td class="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-10</td>
            <td class="px-4 py-3 text-left text-gray-700" data-label="Descripción">Transferencia recibida</td>
            <td class="px-4 py-3 font-bold text-green-600" data-label="Monto">+ $8,000.00</td>
          </tr>
          <tr class="border-b">
            <td class="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-09</td>
            <td class="px-4 py-3 text-left text-gray-700" data-label="Descripción">Retiro en cajero automático</td>
            <td class="px-4 py-3 font-bold text-red-700" data-label="Monto">- $500.00</td>
          </tr>
          <tr class="border-b">
            <td class="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-08</td>
            <td class="px-4 py-3 text-left text-gray-700" data-label="Descripción">Transferencia enviada</td>
            <td class="px-4 py-3 font-bold text-red-700" data-label="Monto">- $1,000.00</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-left text-gray-700" data-label="Fecha">2024-08-07</td>
            <td class="px-4 py-3 text-left text-gray-700" data-label="Descripción">Transferencia recibida</td>
            <td class="px-4 py-3 font-bold text-green-600" data-label="Monto">+ $3,000.00</td>
          </tr>
        </tbody>
      </table>
  </div>
  )
}

export default Transferencias