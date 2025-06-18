import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import type { Event } from '../types/event';

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then((res) => res.json())
      .then((data: Event[]) => setEvents(data));

    const socket = io('http://localhost:3000');
    socket.on('new-event', (event: Event) => {
      setEvents((prev) => [event, ...prev]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return { events };
}