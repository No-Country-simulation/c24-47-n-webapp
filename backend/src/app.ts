
import { envs } from './config/envs';
import { AppRoutes } from './routes/routes';

import { Server } from './server';



(() => {
  main();
})();

async function main() {
  new Server({
    port: envs.port,
    routes: AppRoutes.routes,
  }).start();
}
