import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AccountPersistenceModule } from './modules/account-persistence/account-persistence.module';
import { AccountOrmEntity } from './modules/account-persistence/account.orm-entity';
import { ActivityOrmEntity } from './modules/account-persistence/activity.orm-entity';
import { AccountWebModule } from './modules/account-web/account-web.module';


@Module({
  imports: [
    ConfigModule.forRoot({
        envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      // type: 'sqlite',
      // database: join(__dirname, '..', 'data', 'data.sqlite'),
      // logging: true,
      // autoLoadEntities: true
      type: 'mysql',
      host: process.env.HOST,
      port: Number(process.env.PORT_DATABASE),
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [],
      //synchronize: true,
      autoLoadEntities: true,
    }),
    AccountPersistenceModule,
    AccountWebModule,
    TypeOrmModule.forFeature([AccountOrmEntity, ActivityOrmEntity])
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
