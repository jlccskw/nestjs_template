import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'www.jlcnki.top',
      port: 13306,
      username: 'root',
      password: 'cnkijlfgs',
      database: 'plan_a',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    LoggerModule,
  ],
})
export class AppModule {}
