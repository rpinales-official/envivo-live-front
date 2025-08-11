import { TM_API_KEY } from '../config/env';
import { Event } from '../types/event';

type TMEvent = {
    id: string;
    name: string;
    url?: string;
    info?: string;
    images?: { url: string; width: number; height: number }[];
    dates?: { start?: { dateTime?: string }; timezone?: string };
    _embedded?: { venues?: { name?: string }[] };
};
type TMResponse = { _embedded?: { events?: TMEvent[] } };

function pickBestImage(images?: TMEvent['images']) {
    if (!images?.length) return undefined;
    return [...images].sort((a, b) => (b.width * b.height) - (a.width * a.height))[0]?.url;
}

export async function fetchTicketmaster(params?: {
    keyword?: string;
    city?: string;
    countryCode?: string;
    latlong?: string;
    radius?: number;
    startDateTime?: string;
    size?: number;
    page?: number;
    sort?: string;
}): Promise<Event[]> {
    if (!TM_API_KEY) throw new Error('Missing TM_API_KEY');

    const url = new URL('https://app.ticketmaster.com/discovery/v2/events.json');
    url.searchParams.set('apikey', TM_API_KEY);
    url.searchParams.set('classificationName', 'music');
    url.searchParams.set('size', String(params?.size ?? 100));
    url.searchParams.set('sort', params?.sort ?? 'date,asc');
    if (params?.keyword) url.searchParams.set('keyword', params.keyword);
    if (params?.city) url.searchParams.set('city', params.city);
    if (params?.countryCode) url.searchParams.set('countryCode', params.countryCode);
    if (params?.latlong) url.searchParams.set('latlong', params.latlong);
    if (params?.radius != null) url.searchParams.set('radius', String(params.radius));
    if (params?.startDateTime) url.searchParams.set('startDateTime', params.startDateTime);
    if (params?.page != null) url.searchParams.set('page', String(params.page));

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`Ticketmaster error ${res.status}: ${await res.text()}`);

    const data = (await res.json()) as TMResponse;
    const items = data._embedded?.events ?? [];

    return items.map((ev) => ({
        id: ev.id,
        title: ev.name,
        imageUrl: pickBestImage(ev.images),
        venueName: ev._embedded?.venues?.[0]?.name,
        startDateTime: ev.dates?.start?.dateTime,
        timeZone: ev.dates?.timezone,
        description: ev.info,
        ticketUrl: ev.url,
    }));
}