import { AccountId } from "../../entities/account.entity";

export interface LoadAccoundPort {
    loadAccount(accountId: AccountId);
}