import 'whatwg-fetch';

try {
  // @ts-ignore
  require('react-native/Libraries/Animated/NativeAnimatedHelper');
  // @ts-ignore
  jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
} catch {}

try {
  // eslint-disable-next-line import/no-extraneous-dependencies
  require('react-native-gesture-handler/jestSetup');
} catch {}

try {
  jest.mock('react-native-reanimated', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Reanimated = require('react-native-reanimated/mock');
    // Workaround for known jest + reanimated mock issue
    Reanimated.default.call = () => {};
    return Reanimated;
  });
} catch {}

// Expo Constants for env access in tests
jest.mock('expo-constants', () => ({
  expoConfig: { extra: { TM_API_KEY: 'TEST_KEY' } },
}));