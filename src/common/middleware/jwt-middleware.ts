import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { NextFunction, Request, Response } from "express";



@Injectable()

export class JwtMiddleware implements NestMiddleware {
    constructor(private jwtService: JwtService) { }
    use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            throw new UnauthorizedException('Token not found');
        }
        try {
            const user = this.jwtService.verify(token);
            req['user'] = user;
            next();
        } catch (error) {
            throw new UnauthorizedException('Invalid token');
        }
    }
}