import { Event } from '../types/event';

export const ALL_EVENTS: Event[] = [
    { id: '1', title: 'Rock Night', subtitle: 'The Sinclair · Fri 8:00 PM', imageUrl: 'https://picsum.photos/seed/rock/600/400' },
    { id: '2', title: 'Summer Fest', subtitle: 'City Park · Sat 6:30 PM', imageUrl: 'https://picsum.photos/seed/fest/600/400' },
    { id: '3', title: 'Indie Evening', subtitle: 'Brighton Music Hall · Thu 9:00 PM', imageUrl: 'https://picsum.photos/seed/indie/600/400' },
    { id: '101', title: 'Jazz Fusion', subtitle: 'Wally’s · Tonight 9:00 PM', imageUrl: 'https://picsum.photos/seed/jazz/400/400' },
    { id: '102', title: 'Acoustic Set', subtitle: 'Cafe Luna · Thu 7:30 PM', imageUrl: 'https://picsum.photos/seed/acoustic/400/400' },
    { id: '103', title: 'Punk Revival', subtitle: 'The Middle East · Fri 9:30 PM', imageUrl: 'https://picsum.photos/seed/punk/400/400' },
    { id: '104', title: 'Blues Night', subtitle: 'Beat Brew Hall · Sat 8:00 PM', imageUrl: 'https://picsum.photos/seed/blues/400/400' },
    { id: '201', title: 'Late Night Jazz', subtitle: 'Wally’s · Tonight 11:00 PM', imageUrl: 'https://picsum.photos/seed/latejazz/400/400' },
    { id: '202', title: 'Folk & Friends', subtitle: 'Club Passim · Thu 7:00 PM', imageUrl: 'https://picsum.photos/seed/folk/400/400' },
    { id: '203', title: 'Alt Rock Bash', subtitle: 'Paradise Rock Club · Fri 9:00 PM', imageUrl: 'https://picsum.photos/seed/alt/400/400' },
    { id: '204', title: 'City Strings', subtitle: 'Symphony Hall · Sat 8:00 PM', imageUrl: 'https://picsum.photos/seed/strings/400/400' },
    { id: '205', title: 'Indie Afternoon', subtitle: 'Lawn on D · Sun 4:00 PM', imageUrl: 'https://picsum.photos/seed/indiepm/400/400' },
];

// @TODO: randomize featured events on API integration
export const FEATURED_IDS = ['1', '2', '3', '205'];
export const UPCOMING_IDS = ['101', '102', '103', '104', '205', '202'];