import { Module } from '@nestjs/common';
import { ExampleModule } from './modules/example/example.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ExampleModule,
    PrismaModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
