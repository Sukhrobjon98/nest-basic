import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtMiddleware } from './shared/middleware/jwt-middleware';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [JwtModule.register({
    secret: 'secretKey',
    signOptions: { expiresIn: '60s' },
    global: true,
  }), UserModule, ProductModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {


    consumer.apply(JwtMiddleware).forRoutes('user');

  }
}
