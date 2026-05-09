
import express, { type Application, type Request, type Response } from "express";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler.js";
const app : Application = express();


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})


app.use(globalErrorHandler)
export default app;
