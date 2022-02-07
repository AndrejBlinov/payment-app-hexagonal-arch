import { AccountEntity } from "../entities/account.entity";
import { SendMoneyCommand } from "../ports/in/send-money.command";
import { SendMoneyUseCase } from "../ports/in/send-money.user-case";
import { LoadAccoundPort } from "../ports/out/load-account.port";
import { UpdateAccountStatePort } from "../ports/out/update-account-state.port";

export class SendMoneyService implements SendMoneyUseCase{
    constructor(
        private readonly _loadAccountport: LoadAccoundPort,
        private readonly _updateAccountStatePort: UpdateAccountStatePort
    ) {}

    sendMoney(command: SendMoneyCommand): boolean {
        const sourceAccount: AccountEntity = this._loadAccountport.loadAccount(command.sourceAccountId)
        const targetAccount: AccountEntity = this._loadAccountport.loadAccount(command.targetAccountId)

        if (!sourceAccount.withdraw(command.money, targetAccount.id)) {
            return false;
        }

        if (!targetAccount.deposit(command.money, sourceAccount.id)) {
            return false;
        }

        this._updateAccountStatePort.updateActivities(sourceAccount);
        this._updateAccountStatePort.updateActivities(targetAccount);

        return true;
    }
}