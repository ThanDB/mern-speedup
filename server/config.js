const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://master:abcd1234@ds151232.mlab.com:51232/study',
  port: process.env.PORT || 8000,
};

export default config;
