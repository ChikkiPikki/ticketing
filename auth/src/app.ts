import express from "express";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import "express-async-errors";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRotuer } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler, NotFoundError } from "@chikkipikki2/common";

const app = express();
app.set("trust proxy", true); // traffic is proxied via ingress-nginx,
// so we have to make express aware that it is
// behind a proxy of ingress-nginx
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(signinRouter);
app.use(currentUserRouter);
app.use(signoutRotuer);
app.use(signupRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
