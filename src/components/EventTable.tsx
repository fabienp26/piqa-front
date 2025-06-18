import { useEvents } from '../hooks/useEvents';

export default function EventTable() {
  const { events } = useEvents();

  return (
    <table className="w-full bg-white rounded shadow text-sm">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-4 py-2 text-left">Type</th>
          <th className="px-4 py-2 text-left">Données</th>
          <th className="px-4 py-2 text-left">Date</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id} className="border-t hover:bg-gray-50">
            <td className="px-4 py-2">{event.type}</td>
            <td className="px-4 py-2 text-xs break-all text-gray-700">
              {JSON.stringify(event.data)}
            </td>
            <td className="px-4 py-2">
              {new Date(event.created_at).toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}