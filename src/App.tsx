import EventTable from './components/EventTable';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-4">📊 Dashboard Cucumber</h1>
      <EventTable />
    </div>
  );
}