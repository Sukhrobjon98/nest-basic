import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";



@Catch()
export class ErrorFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        const message = exception.message;
        response.status(status).json({
            statusCode: status,
            message: message
        });
    }
}