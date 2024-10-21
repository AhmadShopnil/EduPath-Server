import express, { Application, Request, Response, urlencoded } from "express";
import cors from "cors";
import routes from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
const app: Application = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", routes);
app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Learning path server is running",
  });
});

app.use(globalErrorHandler);

export default app;
