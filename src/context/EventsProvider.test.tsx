import React from 'react';
import { Text } from 'react-native';
import { render, waitFor } from '@testing-library/react-native';
import { EventsProvider, useEvents } from './EventsProvider';

// Mock the Ticketmaster service to return 12 events with ascending dates
jest.mock('../services/ticketmaster', () => ({
    fetchTicketmaster: jest.fn(async () => {
        const base = new Date('2025-08-01T00:00:00Z').getTime();
        return Array.from({ length: 12 }, (_, i) => ({
            id: String(i + 1),
            title: `Event ${i + 1}`,
            venueName: 'Venue',
            startDateTime: new Date(base + i * 24 * 60 * 60 * 1000).toISOString(), // +i days
            timeZone: 'America/New_York',
            imageUrl: undefined,
            description: undefined,
            ticketUrl: undefined,
        }));
    }),
}));

function Probe() {
    const { events, featuredEvents, upcomingEvents, isLoading } = useEvents();

    if (isLoading) return <Text testID="loading">loading</Text>;

    // Render IDs as JSON so we can easily parse & assert
    return (
        <>
            <Text testID="events">{JSON.stringify(events.map(e => e.id))}</Text>
            <Text testID="featured">{JSON.stringify(featuredEvents.map(e => e.id))}</Text>
            <Text testID="upcoming">{JSON.stringify(upcomingEvents.map(e => e.id))}</Text>
        </>
    );
}

describe('EventsProvider', () => {
    it('provides random 6 featured and 6 upcoming', async () => {
        const { getByTestId, findByTestId } = render(
            <EventsProvider>
                <Probe />
            </EventsProvider>
        );

        // Wait until loading completes
        await findByTestId('featured');

        const events = JSON.parse(getByTestId('events').props.children) as string[];
        const featured = JSON.parse(getByTestId('featured').props.children) as string[];
        const upcoming = JSON.parse(getByTestId('upcoming').props.children) as string[];

        // All 12 loaded
        expect(events.length).toBe(12);

        // Featured: 6 items and all must exist in events (randomized set)
        expect(featured.length).toBe(6);
        featured.forEach(id => expect(events).toContain(id));

        // Upcoming: earliest 6 by date → ids "1".."6"
        expect(upcoming).toEqual(['1', '2', '3', '4', '5', '6']);
    });
});