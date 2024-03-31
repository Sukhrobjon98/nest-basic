import { ArgumentMetadata, HttpException, Injectable, PipeTransform } from "@nestjs/common";





@Injectable()

export class ParseIntPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        const val = parseInt(value, 10);
        if (isNaN(val)) {
            throw new HttpException('Validation failed', 400);
        }
        return val;
    }
}