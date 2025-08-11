import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Event } from '../types/event';
import { ALL_EVENTS, FEATURED_IDS, UPCOMING_IDS } from '../data/mockEvents';

type EventsContextValue = {
    events: Event[];
    featuredEvents: Event[];
    upcomingEvents: Event[];
    getEventById: (id: string) => Event | undefined;
    isLoading: boolean;
    error?: string;
};

const EventsContext = createContext<EventsContextValue | undefined>(undefined);

export function EventsProvider({ children }: { children: React.ReactNode }) {
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>(undefined);

    // @Todo: replace with real API fetch here.
    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                setIsLoading(true);
                const apiEvents = ALL_EVENTS;
                if (!cancelled) setEvents(apiEvents);
            } catch (e) {
                if (!cancelled) setError('Failed to load events');
            } finally {
                if (!cancelled) setIsLoading(false);
            }
        })();
        return () => { cancelled = true; };
    }, []);

    const eventMap = useMemo(() => {
        const map = new Map<string, Event>();
        events.forEach(ev => map.set(ev.id, ev));
        return map;
    }, [events]);

    const featuredEvents = useMemo(
        () => FEATURED_IDS.map(id => eventMap.get(id)).filter(Boolean) as Event[],
        [eventMap]
    );

    const upcomingEvents = useMemo(
        () => UPCOMING_IDS.map(id => eventMap.get(id)).filter(Boolean) as Event[],
        [eventMap]
    );

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