import { Router } from "express";


export class AppRoutes {
  static get routes():Router {
    const router = Router();

    // router.use('/auth', AuthRoutes.routes)


    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World'
      })
    })

    const apiRouter = Router();
    apiRouter.use('/api', router)

    return apiRouter;
  }
}
