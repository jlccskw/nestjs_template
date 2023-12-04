import { getDataSourceToken, TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DynamicModule, Module, Provider, Type } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({})
export default class DatabaseInitModule{
    static forRoot():DynamicModule{
        return{
            global:true,
            module:DatabaseInitModule,
            imports:[
                TypeOrmModule.forRootAsync({
                    imports: [ConfigModule],
                    inject: [ConfigService],
                    useFactory(configService: ConfigService): TypeOrmModuleOptions {
                        const mysqlConnectionOptions = configService.get('db.mysql');
                        return { ...mysqlConnectionOptions };
                    },
                }),
            ]
        }
    }
}