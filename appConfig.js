const isDev = process.env.NODE_ENV !== 'production';

const appConfig = {
  isDev,
  gaTrackingId: isDev ? 'UA-176397412-2' : 'UA-176397412-1',
};

export default appConfig;
