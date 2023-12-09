import {Module} from '@nestjs/common';
import {APP_GUARD} from "@nestjs/core";
import {ConfigModule, ConfigService} from '@nestjs/config';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {AuthService} from './auth.service';
import {UsersModule} from '../users/users.module';
import {LocalStrategy} from './local.strategy';
import {JwtStrategy} from './jwt.strategy';
import {AuthController} from "./auth.controller";
import {JwtAuthGuard} from "./jwt-auth.guard";


@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('app.jwtSecret'),
                signOptions: {expiresIn: configService.get('app.jwtExpiresIn')},
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {
}
