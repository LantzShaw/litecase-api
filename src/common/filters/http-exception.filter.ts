import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.message;

    const exceptionResponse: any = exception.getResponse();

    const { error } = exceptionResponse;

    // console.log('request: ', request);
    // console.log('response: ', response);
    // console.log('message', message);
    // console.log(exception.getResponse());

    response.status(status).json({
      code: status,
      // method: request.method,
      path: request.url,
      message: message,
      error,
      timestamp: new Date().toISOString(),
    });
  }
}
