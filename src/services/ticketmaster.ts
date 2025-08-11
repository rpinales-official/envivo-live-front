import { TM_API_KEY } from '../config/env';

export async function fetchTicketmasterRaw(params?: {
    keyword?: string;
    city?: string;
    countryCode?: string;
    latlong?: string;
    radius?: number;
    startDateTime?: string;
    size?: number;
    page?: number;
    sort?: string;
}) {
    if (!TM_API_KEY) throw new Error('Missing TM_API_KEY');

    const url = new URL('https://app.ticketmaster.com/discovery/v2/events.json');
    url.searchParams.set('apikey', TM_API_KEY);
    url.searchParams.set('classificationName', 'music');
    url.searchParams.set('size', String(params?.size ?? 25));
    url.searchParams.set('sort', params?.sort ?? 'date,asc');

    if (params?.keyword) url.searchParams.set('keyword', params.keyword);
    if (params?.city) url.searchParams.set('city', params.city);
    if (params?.countryCode) url.searchParams.set('countryCode', params.countryCode);
    if (params?.latlong) url.searchParams.set('latlong', params.latlong);
    if (params?.radius != null) url.searchParams.set('radius', String(params.radius));
    if (params?.startDateTime) url.searchParams.set('startDateTime', params.startDateTime);
    if (params?.page != null) url.searchParams.set('page', String(params.page));

    const res = await fetch(url.toString());
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Ticketmaster error ${res.status}: ${text}`);
    }
    return res.json();
}