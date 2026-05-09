
import express, { type Application, type Request, type Response } from "express";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler.js";
import { notFound } from "./app/middleware/notFound.js";
import { userRoutes } from "./app/modules/users/user.routes.js";
const app : Application = express();


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})


app.use("/users",userRoutes);

app.use(globalErrorHandler)
app.use(notFound)
export default app;
