import {Module} from '@nestjs/common';
import {UsersModule} from './modules/users/users.module';
import {ConfigModule} from '@nestjs/config';
import configuration from './config/configuration';
import DatabaseInitModule from "./modules/init";


@Module({
  imports: [
    ConfigModule.forRoot({load: [configuration], isGlobal: true, cache: true,}),
    DatabaseInitModule.forRoot(),
    UsersModule,
  ],
})
export class AppModule {}
