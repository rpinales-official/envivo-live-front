import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Event } from '../types/event';
import { fetchTicketmaster } from '../services/ticketmaster';
import { toTmStart } from '../utils/datetime';

type EventsContextValue = {
    events: Event[];
    featuredEvents: Event[];
    upcomingEvents: Event[];
    getEventById: (id: string) => Event | undefined;
    isLoading: boolean;
    error?: string;
};

const EventsContext = createContext<EventsContextValue | undefined>(undefined);

function shuffleArray<T>(array: T[]) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export function EventsProvider({ children }: { children: React.ReactNode }) {
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                setIsLoading(true);
                const startDateTime = toTmStart(new Date());
                const apiEvents = await fetchTicketmaster({
                    countryCode: 'US',
                    city: 'Boston',
                    radius: 50,
                    startDateTime,
                    size: 100,
                    sort: 'date,asc',
                });
                if (!cancelled) setEvents(apiEvents);
            } catch (e: any) {
                if (!cancelled) setError(e?.message ?? 'Failed to load events');
            } finally {
                if (!cancelled) setIsLoading(false);
            }
        })();
        return () => {
            cancelled = true;
        };
    }, []);

    const eventMap = useMemo(() => {
        const m = new Map<string, Event>();
        for (const ev of events) m.set(ev.id, ev);
        return m;
    }, [events]);

    const featuredEvents = useMemo(() => {
        if (!events.length) return [];
        return shuffleArray(events).slice(0, 6);
    }, [events]);

    const upcomingEvents = useMemo(() => {
        if (!events.length) return [];
        return [...events]
            .filter((e) => !!e.startDateTime)
            .sort((a, b) => {
                const ta = new Date(a.startDateTime!).getTime();
                const tb = new Date(b.startDateTime!).getTime();
                return ta - tb;
            })
            .slice(0, 6);
    }, [events]);

    const getEventById = (id: string) => eventMap.get(id);

    const value: EventsContextValue = {
        events,
        featuredEvents,
        upcomingEvents,
        getEventById,
        isLoading,
        error,
    };

    return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>;
}

export function useEvents() {
    const ctx = useContext(EventsContext);
    if (!ctx) throw new Error('useEvents must be used within an EventsProvider');
    return ctx;
}