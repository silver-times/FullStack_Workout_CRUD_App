import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = req.headers.authorization;

    if (!token)
      return res.status(401).json({ error: "You are not authenticated rajat" });

    token = token.split(" ")[1];
    let user = jwt.verify(token, process.env.JWT_SECRET as string);
    req.body.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "You are not authenticated again" });
  }
};
