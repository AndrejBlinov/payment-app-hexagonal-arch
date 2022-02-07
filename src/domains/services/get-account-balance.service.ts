import { AccountId } from "../entities/account.entity";
import { GetAccountBalanceQuery } from "../ports/in/get-account-balance.query";
import { LoadAccoundPort } from "../ports/out/load-account.port";

export class GetAccountBalanceService implements GetAccountBalanceQuery {

    constructor(private readonly _loadAccountPort: LoadAccoundPort) {}

    getAccountBalance(accountId: AccountId) {
        this._loadAccountPort.loadAccount(accountId).calculateBalance();
    }
}