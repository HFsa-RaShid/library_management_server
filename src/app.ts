
import express, { type Application, type Request, type Response } from "express";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler.js";
import { notFound } from "./app/middleware/notFound.js";
import router from "./app/routes/index.js";
const app : Application = express();


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use(express.json());
app.use("/api",router);

app.use(globalErrorHandler)
app.use(notFound)
export default app;
