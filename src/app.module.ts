import {Module} from '@nestjs/common';
import {UsersModule} from './modules/users/users.module';
import {ConfigModule} from '@nestjs/config';
import configuration from './config/configuration';
import DatabaseInitModule from "./modules/init";
import {ResponseIntercepter} from "./common/response.interceptor";
import {APP_INTERCEPTOR} from "@nestjs/core";
import {AppController} from "./app.controller";
import {AuthModule} from "./modules/auth/auth.module";

@Module({
    imports: [
        ConfigModule.forRoot({load: [configuration], isGlobal: true, cache: true,}),
        DatabaseInitModule.forRoot(),
        UsersModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: ResponseIntercepter,
        },
    ],
})
export class AppModule {
}
