import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { SECRET_KEY } from "../config/token";

interface IToken {
    id: number,
    username: String,
    email: String,
    password: String,
    role: String,
    iat: number,
    exp: number,
}

export function loginMiddleware(req: Request, res: Response, next: NextFunction) {
    const cookies = req.cookies;
    if (cookies.token) { 
        const token = verify(cookies.token, SECRET_KEY) as IToken
        console.log(token)
        res.locals.user = {
            id: token.id,
            username: token.username,
            email: token.email,
            password: token.password,
            role: token.role,
        }
        next();
    } else {
        res.sendStatus(403)
    }
}