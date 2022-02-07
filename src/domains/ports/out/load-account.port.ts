import { AccountEntity, AccountId } from "../../entities/account.entity";

export interface LoadAccoundPort {
    loadAccount(accountId: AccountId): AccountEntity;
}