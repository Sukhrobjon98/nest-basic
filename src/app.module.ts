import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtMiddleware } from './common/middleware/jwt-middleware';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { APP_FILTER } from '@nestjs/core';
import { ErrorFilter } from './common/filters/error.filter';

@Module({
  imports: [JwtModule.register({
    secret: 'secretKey',
    signOptions: { expiresIn: '60s' },
    global: true,
  }), UserModule, ProductModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ErrorFilter
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {


    // consumer.apply(JwtMiddleware).forRoutes('user');

  }
}
