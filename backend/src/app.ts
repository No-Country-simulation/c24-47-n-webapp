
import { envs } from './config/envs';
import { Database, prisma } from './data/prisma-db';
import { AppRoutes } from './routes/routes';

import { Server } from './server';



(() => {
  main();
})();

async function main() {
  await Database.connect();
  new Server({
    port: envs.port,
    routes: AppRoutes.routes,
  }).start();
}

// Manejo de cierre de conexiones ante termino de procesos en terminal
process.on('SIGINT', async () => {
  await Database.disconnect();
  process.exit(0);
});
