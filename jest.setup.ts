import 'whatwg-fetch';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('expo-constants', () => ({
  expoConfig: { extra: { TM_API_KEY: 'TEST_KEY' } },
}));