import {Controller, Request, Post, UseGuards} from '@nestjs/common';
import {LocalAuthGuard} from './local-auth.guard';
import {AuthService} from './auth.service';
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @SetMetadata(IS_PUBLIC_KEY, true)
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.generateJwtToken(req.user);
    }
}