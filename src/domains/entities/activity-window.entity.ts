import { AccountId } from "./account.entity";
import { ActivityEntity } from "./activity.entity";
import { MoneyEntity } from "./money.entity";


export class ActivityWindowEntity {
    private readonly _activities: ActivityEntity[] = [];

    get activities(): ActivityEntity[] {
        return this._activities
    }

    addActivity(activity: ActivityEntity) {
        this.activities.push(activity);
        return this;
    }

    public calculate(accountId: AccountId): MoneyEntity {
        const depositeBalance = this.activities
            .filter((activity: ActivityEntity):boolean => activity.targetAccountId === accountId)
            .map((activity: ActivityEntity) => activity.money)
            .reduce(MoneyEntity.add, MoneyEntity.ZERO())

        const withdrawalBalance = this.activities
            .filter((activity: ActivityEntity):boolean => activity.sourceAccountId === accountId)
            .map((activity: ActivityEntity) => activity.money)
            .reduce(MoneyEntity.add, MoneyEntity.ZERO())
        return MoneyEntity.add(depositeBalance, withdrawalBalance.negative());
    }
}