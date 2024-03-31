import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(private jwtService: JwtService) { }

    async createUser() {


        let user = {
            username: 'admin',
            password: 'admin'
        }
        let token = this.jwtService.sign(user);

        return token;
    }
}
