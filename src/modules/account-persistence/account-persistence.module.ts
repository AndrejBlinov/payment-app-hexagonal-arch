import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SendMoneyUseCaseSymbol } from "src/domains/ports/in/send-money.user-case";
import { SendMoneyService } from "src/domains/services/send-money.service";
import { AccountPersistanceAdapterService } from "./account-persistence-adapter.service";
import { AccountOrmEntity } from "./account.orm-entity";
import { ActivityOrmEntity } from "./activity.orm-entity";

@Global()
@Module({
    // imports: [
    //     TypeOrmModule.forFeature([AccountOrmEntity, ActivityOrmEntity])
    // ],
    providers: [
        AccountPersistanceAdapterService,
        {
            provide: SendMoneyUseCaseSymbol,
            useFactory: (accountPersistanceAdapter) => {
                return new SendMoneyService(accountPersistanceAdapter, accountPersistanceAdapter)
            },
            inject: [AccountPersistanceAdapterService]
        }
    ],
    exports: [SendMoneyUseCaseSymbol]
})
export class AccountPersistenceModule {

}