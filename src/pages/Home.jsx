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
    <div className="flex flex-col min-h-screen ">
      <div className="flex-grow">
        <main className="container mx-auto p-4 bg-gray-100 rounded-lg">
          <h1 className="sr-only">Home Banking</h1>

          <section className="mb-6">
            <div className="bg-white p-4 shadow rounded-xl max-w-2xl">
              <h2 className="text-s font-semibold mb-1" >Mi balance</h2>
              <span className="text-2xl font-bold text-primary">$43.521,08</span>
            </div>
          </section>

          <section className="mb-6">
            <div className="bg-white p-4 shadow rounded-xl max-w-2xl  ">
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
            <div className="bg-white p-4 shadow rounded-xl max-w-2xl">
              <h2 className="text-xl font-semibold">Mi Gasto</h2>
              <img src="/chart1.png" alt="Gráfico de gastos" className="w-full h-auto" />
            </div>
          </section>

          <section>
            <div className="bg-white p-4 shadow rounded-xl max-w-2xl">
              <h2 className="text-xl font-semibold">Limite Crediticio</h2>
              <div>$4,000 / $10,000</div>
            </div>
          </section>

          <aside className="bg-white p-4 shadow rounded position-fixed right-12 top-12 my-6 mr-">
            <div className="bg-gray-100 p-4 rounded shadow">
              <div>Tarjeta de crédito</div>
              <div className="font-mono">**** **** **** 7526</div>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <div>Tarjeta de débito</div>
              <div className="font-mono">**** **** **** 8321</div>
            </div>
        </aside>
        </main>

        
      </div>
    </div>
  );
};

export default Dashboard;
