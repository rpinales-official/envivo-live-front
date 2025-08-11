const ORDINALS: Record<number, string> = { 1: 'st', 2: 'nd', 3: 'rd' };

export function ordinal(n: number) {
    const v = n % 100;
    if (v >= 11 && v <= 13) return 'th';
    return ORDINALS[n % 10] ?? 'th';
}

/** "Thu 28th 9:00 PM" using provided time zone (falls back to UTC) */
export function formatEventDateLocal(utcISO?: string, timeZone?: string) {
    if (!utcISO) return '';
    const tz = timeZone || 'UTC';
    const d = new Date(utcISO);

    const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'short', timeZone: tz }).format(d);
    const dayNum = Number(
        new Intl.DateTimeFormat('en-US', { day: 'numeric', timeZone: tz }).format(d)
    );
    const time = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: tz,
    }).format(d);

    return `${dayName} ${dayNum}${ordinal(dayNum)} ${time}`;
}

/** e.g. "Brighton Music Hall · Thu 28th 9:00 PM" */
export function buildEventMeta(venueName?: string, utcISO?: string, timeZone?: string) {
    const when = formatEventDateLocal(utcISO, timeZone);
    if (venueName && when) return `${venueName} · ${when}`;
    return venueName || when || '';
}