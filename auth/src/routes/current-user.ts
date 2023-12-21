import express from "express";
import { currentUser } from "@chikkipikki2/common";
import { Request, Response, NextFunction } from "express";
const router = express.Router();

router.get(
  "/api/users/currentuser",
  currentUser,
  (req: Request, res: Response) => {
    res.send({ currentUser: req.currentUser || null });
  }
);

export { router as currentUserRouter };
