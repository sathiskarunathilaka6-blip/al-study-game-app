import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.alstudy.game',
  appName: 'AL Study Game',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#080b12'
  },
  ios: {
    contentInset: 'automatic'
  }
};

export default config;
