export function toTmStart(date = new Date()) {
  // "2025-08-11T14:23:45.123Z" -> "2025-08-11T14:23:45Z"
  return date.toISOString().replace(/\.\d{3}Z$/, 'Z');
}