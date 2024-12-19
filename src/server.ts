import app from './app';
import config from './config/config';

const server = app.listen(config.PORT, () => {
  console.log(`Application Started`, {
    SERVER : config.SERVER
  });
});

(async () => {
  try {
    console.log('Server Initiated');
  } catch (error) {

    console.error('Application Error', { meta: error });

    server.close((closeError) => {
      if (closeError) {
        console.error('Server Shutdown Error', { meta: closeError });
      }
      process.exit(1);
    });
  }
})();
