import { HttpException, HttpStatus } from "@nestjs/common";


// Exception - cutomni errorlarni yasash uchun ishlatiladi
export class BadRequestException extends HttpException {
    constructor(message: string) {
        super(message, HttpStatus.BAD_REQUEST);
    }
}