import { Event } from '../types/event';

export const ALL_EVENTS: Event[] = [
    { id: '1', title: 'Rock Night', venueName: 'Brighton Music Hall',
    startDateTime: '2025-08-13T23:00:00Z',
    timeZone: 'America/New_York', description: 'Rock Night', imageUrl: 'https://picsum.photos/seed/rock/600/400', ticketUrl: 'https://example.com/rock-night' },
    { id: '2', title: 'Summer Fest', venueName: 'Brighton Music Hall',
    startDateTime: '2025-08-13T23:00:00Z',
    timeZone: 'America/New_York', description: 'Summer Fest', imageUrl: 'https://picsum.photos/seed/fest/600/400', ticketUrl: 'https://example.com/rock-night' },
    { id: '3', title: 'Indie Evening', venueName: 'Brighton Music Hall',
    startDateTime: '2025-08-13T23:00:00Z',
    timeZone: 'America/New_York', description: 'Indie Evening', imageUrl: 'https://picsum.photos/seed/indie/600/400', ticketUrl: 'https://example.com/rock-night' },
    { id: '101', title: 'Jazz Fusion', venueName: 'Brighton Music Hall',
    startDateTime: '2025-08-13T23:00:00Z',
    timeZone: 'America/New_York', description: 'Jazz Fusion', imageUrl: 'https://picsum.photos/seed/jazz/400/400', ticketUrl: 'https://example.com/rock-night' },
    { id: '102', title: 'Acoustic Set', venueName: 'Brighton Music Hall',
    startDateTime: '2025-08-13T23:00:00Z',
    timeZone: 'America/New_York', description: 'Acoustic Set', imageUrl: 'https://picsum.photos/seed/acoustic/400/400', ticketUrl: 'https://example.com/rock-night' },
    { id: '103', title: 'Punk Revival', venueName: 'Brighton Music Hall',
    startDateTime: '2025-08-13T23:00:00Z',
    timeZone: 'America/New_York', description: 'Punk Revival', imageUrl: 'https://picsum.photos/seed/punk/400/400', ticketUrl: 'https://example.com/rock-night' },
    { id: '104', title: 'Blues Night', venueName: 'Brighton Music Hall',
    startDateTime: '2025-08-13T23:00:00Z',
    timeZone: 'America/New_York', description: 'Punk Revival', imageUrl: 'https://picsum.photos/seed/blues/400/400', ticketUrl: 'https://example.com/rock-night' },
    { id: '201', title: 'Late Night Jazz', venueName: 'Brighton Music Hall',
    startDateTime: '2025-08-13T23:00:00Z',
    timeZone: 'America/New_York', description: 'Punk Revival',imageUrl: 'https://picsum.photos/seed/latejazz/400/400', ticketUrl: 'https://example.com/rock-night' },
    { id: '202', title: 'Folk & Friends', venueName: 'Brighton Music Hall',
    startDateTime: '2025-08-13T23:00:00Z',
    timeZone: 'America/New_York', description: 'Punk Revival', imageUrl: 'https://picsum.photos/seed/folk/400/400', ticketUrl: 'https://example.com/rock-night' },
    { id: '203', title: 'Alt Rock Bash', venueName: 'Brighton Music Hall',
    startDateTime: '2025-08-13T23:00:00Z',
    timeZone: 'America/New_York', description: 'Punk Revival', imageUrl: 'https://picsum.photos/seed/alt/400/400', ticketUrl: 'https://example.com/rock-night' },
    { id: '204', title: 'City Strings', venueName: 'Brighton Music Hall',
    startDateTime: '2025-08-13T23:00:00Z',
    timeZone: 'America/New_York', description: 'Punk Revival', imageUrl: 'https://picsum.photos/seed/strings/400/400', ticketUrl: 'https://example.com/rock-night' },
    { id: '205', title: 'Indie Afternoon', venueName: 'Brighton Music Hall',
    startDateTime: '2025-08-13T23:00:00Z',
    timeZone: 'America/New_York', description: 'Punk Revival', imageUrl: 'https://picsum.photos/seed/indiepm/400/400', ticketUrl: 'https://example.com/rock-night' },
];

// @TODO: randomize featured events on API integration
export const FEATURED_IDS = ['1', '2', '3', '205'];
export const UPCOMING_IDS = ['101', '102', '103', '104', '205', '202'];