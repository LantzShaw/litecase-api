// import {
//   CallHandler,
//   ExecutionContext,
//   Injectable,
//   NestInterceptor,
// } from '@nestjs/common';
// import { map, Observable } from 'rxjs';

// export interface Response<T> {
//   data: T;
//   // code: number;
//   // message: string;
// }

// @Injectable()
// export class TransformInterceptor<T>
//   implements NestInterceptor<T, Response<T>>
// {
//   intercept(
//     context: ExecutionContext,
//     next: CallHandler,
//   ): Observable<Response<T>> {
//     return next.handle().pipe(
//       map((data) => {
//         return {
//           code: 200,
//           data,
//           message: 'success',
//         };
//       }),
//     );
//   }
// }

// import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// export interface Response<T> {
//   data: T;
// }

// @Injectable()
// export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
//   intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
//     return next.handle().pipe(map(data => ({ data })));
//   }
// }
