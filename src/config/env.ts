import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra ?? {};
export const TM_API_KEY = String(extra.TM_API_KEY ?? '');