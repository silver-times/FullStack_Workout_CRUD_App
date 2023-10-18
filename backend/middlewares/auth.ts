import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

type User = {
  id: number;
  email: string;
  iat: number;
  exp: number;
};

type RequestExt = Request & { user: null | User };

dotenv.config();
const prisma = new PrismaClient();

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = req.headers.authorization;

    if (!token)
      return res.status(401).json({ error: "You are not authenticated!" });

    token = token.split(" ")[1];
    const { id } = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: number;
    };
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      return res.status(401).json({ error: "You are not authenticated!" });
    }
    (req as RequestExt).user = {
      id: user.id,
      email: user.email,
      iat: 0,
      exp: 0,
    };
    next();
  } catch (error) {
    res.status(401).json({ error: "You are not authenticated." });
  }
};
