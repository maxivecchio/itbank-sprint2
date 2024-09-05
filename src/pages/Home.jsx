import React from 'react';

const Home = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <main className="container mx-auto p-4">
          <h1 className="sr-only">Home Banking</h1>

          <section className="mb-6">
            <div className="bg-white p-4 shadow rounded-xl">
              <h2 className="text-s font-semibold mb-1" >Mi balance</h2>
              <span className="text-2xl font-bold text-primary">$43.521,08</span>
            </div>
          </section>

          <section className="mb-6">
            <div className="bg-white p-4 shadow rounded-xl">
              <h2 className="text-xl font-semibold">Últimas Transacciones</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>Supermercado</div>
                  <div className="text-red-500">-$79,76</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>Insumos médicos</div>
                  <div className="text-green-500">+$512,45</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>Electrodomésticos</div>
                  <div className="text-red-500">-$34,40</div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <div className="bg-white p-4 shadow rounded-xl">
              <h2 className="text-xl font-semibold">Mi Gasto</h2>
              <img src="/chart1.png" alt="Gráfico de gastos" className="w-full h-auto" />
            </div>
          </section>

          <section>
            <div className="bg-white p-4 shadow rounded-xl">
              <h2 className="text-xl font-semibold">Limite Crediticio</h2>
              <div>$4,000 / $10,000</div>
            </div>
          </section>
        </main>

        <aside className="bg-white p-4 shadow rounded fixed right-0 top-0 mt-16 mr-4">
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded shadow">
              <div>Tarjeta de crédito</div>
              <div className="font-mono">**** **** **** 7526</div>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <div>Tarjeta de débito</div>
              <div className="font-mono">**** **** **** 8321</div>
            </div>
          </div>
        </aside>
      </div>

      <footer className=" bg-primary text-white p-4 text-center rounded-xl shadow h-15 w-150 ">
        <p>&copy; 2024 Banco Rossum. Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Dashboard;
