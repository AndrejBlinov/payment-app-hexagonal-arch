import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountOrmEntity } from "../account-persistence/account.orm-entity";
import { ActivityOrmEntity } from "../account-persistence/activity.orm-entity";
import { SendMoneyController } from "./send-money.controller";

@Module({
    controllers: [
        SendMoneyController
    ],
    // imports: [
    //     TypeOrmModule.forFeature([AccountOrmEntity, ActivityOrmEntity])
    // ],
})
export class AccountWebModule {

}