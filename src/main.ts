import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ConfigService} from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    app.enableCors();
    await app.listen(configService.get('server.port'));
    console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
